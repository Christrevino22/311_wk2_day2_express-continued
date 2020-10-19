const products = require('../data/products')

const list = (req, res) => {
  res.json(products)
}

const show = (req, res) => {
  res.json(products.find(contact => contact._id == req.params.id))
}

const create = (req,res) => {
  let payload = req.body
  payload._id = 1;
  products.map(contact => {
    contact._id = contact._id + 1;
  }) 
   
  products.push(payload);
  
// let last = products.pop()._id;
// payload._id = last + 1;  
  res.json(products)
}

module.exports = { list, show, create}