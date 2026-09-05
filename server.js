const express = require('express');
const crypto = require('crypto');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const correctHash = 'ad62217fc719c4b9aac10a15ab1df3d5d92796d9f7a4c75a783693a979b4f8e7';

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
