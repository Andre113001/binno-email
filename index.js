const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT;

// Middleware
const jsonParserMiddleware = express.json();

app.use(jsonParserMiddleware);

// Routes
const membershipRoute = require('./routes/membershipRoute');
const othersRoute = require('./routes/othersRoute');

app.use('/membership', membershipRoute);
app.use('/others', othersRoute);

app.get('/', (req, res) => res.status(200).json("Hello There!"));

app.listen(port, () => {
    console.log(`======================================`);
    console.log(`BiNNO Email Server listening on port ${port}`);
    console.log(`======================================`);
});
