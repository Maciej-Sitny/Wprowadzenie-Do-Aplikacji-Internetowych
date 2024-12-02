const express = require('express');
const sqlite3 = require("sqlite3");
const fs = require("fs");
const router = express.Router();

const db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.error('Nie można otworzyć bazy danych', err.message);
    } else {
        console.log('Połączono z bazą danych SQLite.');
    }
})

router.post('/', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'E-mail i hasło są wymagane' });
    }

    const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
    db.get(query, [email, password], (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Błąd serwera' });
        }

        if (!user) {
            return res.status(400).json({ error: 'Nieprawidłowy e-mail lub hasło' });
        }

        res.status(200).json({ message: 'Zalogowano pomyślnie', id: user.id });
    });
});



module.exports = router;