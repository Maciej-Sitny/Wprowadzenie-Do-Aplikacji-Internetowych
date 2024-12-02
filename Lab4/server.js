const express = require('express');
const sqlite3 = require('sqlite3');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = new sqlite3.Database('./books.db', (err) => {
    if (err) {
        console.error('Nie można otworzyć bazy danych:', err.message);
    } else {
        console.log('Połączono z bazą danych SQLite.');
    }
});

app.get('/api/books', (req, res) => {
    db.all('SELECT * FROM books', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

app.get('/api/books/:id', (req, res) => {
    const id = req.params.id;
    db.get('SELECT * FROM books WHERE id = ?', [id], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(row);
    });
});

app.post('/api/books', (req, res) => {
    const { title, author, year } = req.body;

    if (!title || !author || !year) {
        return res.status(400).json({ error: 'Tytuł, autor i data wydania są wymagane' });
    }

    const sql = `INSERT INTO books (title, author, year) VALUES (?, ?, ?)`;
    const params = [title, author, year];

    db.run(sql, params, function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.status(201).json({ id: this.lastID });
    });
});

app.delete('/api/books/:id', (req, res) => {
    const id = req.params.id;
    db.run('DELETE FROM books WHERE id = ?', [id], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Usunięto książkę' });
    });
});

const orderRouter = require('./routes/orders');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
app.use('/api/orders', orderRouter);
app.use('/api/register', registerRouter);
app.use('/api/login', loginRouter);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});