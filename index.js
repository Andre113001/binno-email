const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database/db');

dotenv.config();

const cors = cors()

const app = express();
const port = process.env.PORT;

// Middleware
const jsonParserMiddleware = express.json();

app.use(jsonParserMiddleware);

// Routes
const membershipRoute = require('./routes/membershipRoute');
const othersRoute = require('./routes/othersRoute');
const newsletterRoute = require('./routes/newsletterRoute');


app.use('/membership', membershipRoute);
app.use('/others', othersRoute);
app.use('/newsletter', newsletterRoute)

app.get('/', (req, res) => res.status(200).json("Hello There!"));

app.listen(port, () => {
    console.log(`======================================`);
    console.log(`BiNNO Email Server listening on port ${port}`);
    console.log(`======================================`);
});
