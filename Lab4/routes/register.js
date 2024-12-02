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
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'E-mail i hasło są wymagane' });
    }
    db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, password], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Użytkownik został zarejestrowany', userID: this.lastID });
    });
})


module.exports = router;