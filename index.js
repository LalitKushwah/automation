const express = require('express');
const app = express();
// const path = require('path');

app.get('/health', (req, res) => {
    res.send({ status: 'OK' })
});

app.listen(3000, () => {
    console.log('Server is listenting, Well done you made it');
});
