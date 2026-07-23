const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json({ limit: '5mb' }));   // IMPORTANT FIX
app.use(express.static('public'));

app.set('views', 'views');
app.set('view engine', 'hbs');

const fileName = 'students.json';

// Ensure file exists
if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, JSON.stringify([], null, 2));
}

function loadData() {
    try {
        return JSON.parse(fs.readFileSync(fileName, 'utf8'));
    } catch (err) {
        console.error("Read error:", err);
        return [];
    }
}

function saveData(data) {
    try {
        fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
        console.log("📌 File saved!");
    } catch (err) {
        console.error("Write error:", err);
    }
}

app.get('/', (req, res) => res.render('home'));

app.get('/students', (req, res) => {
    res.json(loadData());
});

app.post('/students', (req, res) => {
    console.log("📌 RECEIVED FROM FRONTEND:", req.body);

    if (!req.body || !req.body.timetable) {
        return res.status(400).json({ success: false, message: "Invalid data" });
    }

    const data = loadData();

    const newEntry = {
        id: Date.now(),
        timetable: req.body.timetable
    };

    console.log("📌 SAVING THIS OBJECT:", newEntry);

    data.push(newEntry);
    saveData(data);

    res.json({ success: true, message: "Saved successfully" });
});

app.listen(port, () => console.log("Server running on port " + port));
