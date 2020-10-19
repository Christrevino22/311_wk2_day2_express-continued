const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//we've got data!!! 
const contacts = require('./Routes/contacts.js');
const products = require('./Routes/products.js');
const comments = require('./Routes/comments.js');
const vehicles = require('./Routes/vehicles.js');
//everthing has been sent to its appropritate home
const port = process.env.PORT || 4001;

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(contacts)
app.use(products)
app.use(comments)
app.use(vehicles)


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
