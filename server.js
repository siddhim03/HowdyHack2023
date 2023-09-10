const express = require('express');
const app = express();
const port = 3000;

// Enable JSON parsing for incoming requests
app.use(express.json());

// Store the location data in memory (replace with a database if needed)
let storedLocation = null;

// Handle POST requests to update the location
app.post('/update-location', (req, res) => {
    const { location } = req.body;
    storedLocation = location;
    res.json({ message: 'Location updated successfully' });
});

// Handle GET requests to retrieve the current location
app.get('/get-location', (req, res) => {
    res.json({ location: storedLocation });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
