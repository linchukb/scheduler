require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Log all requests to see what URLs are being hit
app.use((req, res, next) => {
    console.log('Request URL:', req.originalUrl);
    next();
});

// Correctly serve static files
app.use(express.static('/home/ubuntu/scheduler/client/build'));

// Serve the static files
app.use('/users', userRoutes);

// Fallback to `index.html` for all other requests (SPA routing)
app.get('*', (req, res) => {
    res.sendFile('/home/ubuntu/scheduler/client/build/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
