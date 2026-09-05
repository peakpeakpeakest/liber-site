const express = require('express');
const crypto = require('crypto');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const correctHash = '8a5f4a3b2c1d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3';

app.post('/check', (req, res) => {
    const password = req.body.password;
    const hash = crypto.createHash('sha256').update(password).digest('hex');
    if (hash === correctHash) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
