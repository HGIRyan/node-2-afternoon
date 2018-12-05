require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const products_controller = require('./products_controller')

const app = express();
app.use(bodyParser.json());


massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    // console.log(dbInstance)
    app.set('db', dbInstance)
}).catch((err) => console.log('error', err));

console.log('I got here')
app.get('/api/products', products_controller.getAll);
app.get('/api/product/:id', products_controller.getOne);

app.put('/api/product/:id', products_controller.Update);

app.post('/api/products', products_controller.create);

app.delete('/api/product/:id', products_controller.delete);



let port = process.env.PORT;
app.listen(port, () => { console.log(`${port}: child slaves in shipping`) })
