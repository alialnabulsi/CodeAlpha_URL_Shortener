const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();


const app = express();


// Middleware
app.use(cors());
app.use(bodyParser.json());


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
    {
    console.log(`🚀 Server running on port ${PORT}`)
    }
);