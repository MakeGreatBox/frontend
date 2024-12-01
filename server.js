// server.js
const express = require('express');
const app = express();
const port = 3001;

app.get('/api/history', (req, res) => {
    const historyData = [
        { id: 1, event: "Moon Landing", year: 1969 },
        { id: 2, event: "Fall of the Berlin Wall", year: 1989 },
        { id: 3, event: "Y2K Bug", year: 2000 },
    ];
    res.json(historyData);
});

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});
