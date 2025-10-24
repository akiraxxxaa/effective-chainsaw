// Refactored: 2025-10-24
// Updated: 2025-10-02
/**
 * Main application entry point.
 */
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
