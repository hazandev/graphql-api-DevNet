const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

const PORT = 3000

app.get('/', (req, res, next) => {
    res.send('hello world')
})
app.listen(PORT || 3030);