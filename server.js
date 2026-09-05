const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

app.post('/check', (req, res) => {
    const password = req.body.password;
    if (password === process.env.PASSWORD) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
