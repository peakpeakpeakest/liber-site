const express = require('express');
const crypto = require('crypto');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const correctHash = '5d5b3a5f6c6d9a2f1e8b3c4d7e8f9a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8';

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
