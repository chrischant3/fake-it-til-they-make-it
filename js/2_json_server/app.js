const express = require('express')
const app = express()

const basket = require('./data/basket.json')

app.get('/', (req, res) => res.send("Fake it, 'til they make it!")
);


app.get('/basket', (req, res) => {
    //view the request
    console.log('GET /Basket Request: ', req);

    res.setHeader('Content-Type', 'application/json');
    //return whatever status code you want
    res.status(200).send(JSON.stringify(basket))
});

app.listen(3000, () => console.log('Example app listening on port 3000!')
);