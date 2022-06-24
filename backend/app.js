const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const app = express();

dotenv.config({path: 'config.env'});
const PORT = process.env.port || 8080;

// log requests
app.use(morgan('tiny'));

app.get('/',(req, res) => {
    res.send('Webshop app');
});

app.listen(3000, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});