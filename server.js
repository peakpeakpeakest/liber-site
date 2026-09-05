const express = require('express');
const crypto = require('crypto');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const correctHash = 'c2a5f6b8d1e3f7a9b4c6d8e0f2a4b6c8d0e2f4a6b8c0d2e4f6a8b0c2d4e6f8a0';

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
