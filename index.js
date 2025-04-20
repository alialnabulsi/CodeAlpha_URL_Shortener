const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();


const app = express();

// Import routes
const usersRoute = require('./routes/usersRoute');
const clicksRoute = require('./routes/clicksRoute');
const anonymousShortURLsRoute = require('./routes/anonymousShortURLsRoute');
const userShortURLsRoute = require('./routes/userShortURLsRoute');


// use routes
app.use('/snip.ly/user', usersRoute);
app.use('/snip.ly/clicks', clicksRoute);
app.use('/snip.ly/anonymousShortURLs', anonymousShortURLsRoute);
app.use('/snip.ly/userShortURLs', userShortURLsRoute);

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