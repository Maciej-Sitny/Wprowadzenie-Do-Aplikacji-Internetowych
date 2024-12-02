const express = require('express');
const sqlite3 = require("sqlite3");
const fs = require("fs");
const router = express.Router();


const ordersDB = new sqlite3.Database('./orders.db', (err) => {
    if (err) {
        console.error('Nie można otworzyć bazy danych', err.message);
    } else {
        console.log('Połączono z bazą danych SQLite.');
    }
});

router.get('/:userID', (req,res) =>{
    const userID = req.params.userID;
    ordersDB.all('SELECT * FROM orders WHERE userID = ?', [userID], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
})

router.post('/', (req,res) =>{
    const { userID, bookID, numberOfBooks } = req.body;
    if (!userID || !bookID || !numberOfBooks) {
        return res.status(400).json({ error: 'UserID, bookID, quantity są wymagane' });
    }
    ordersDB.run('INSERT INTO orders (userID, bookID, numberOfBooks) VALUES (?, ?, ?)', [userID, bookID, numberOfBooks], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Stworzono zamówienie', orderID: this.lastID });
    });
})

router.delete('/:orderID', (req, res) => {
    const orderID = req.params.orderID;
    ordersDB.run('DELETE FROM orders WHERE orderID = ?', [orderID], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Nie znaleziono zamówienia' });
        }
        res.json({ message: 'Usunięto zamówienie' });
    });
});

router.patch('/:orderID', (req, res) => {
    const orderID = req.params.orderID;
    const { numberOfBooks } = req.body;
    if (!numberOfBooks) {
        return res.status(400).json({ error: 'NumberOfBooks jest wymagane' });
    }
    ordersDB.run('UPDATE orders SET numberOfBooks = ? WHERE orderID = ?', [numberOfBooks, orderID], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Nie znaleziono zamówienia' });
        }
        res.json({ message: 'Zamówienie zostało zaktualizowane' });
    });
});

module.exports = router;

