const vehicles = require('../data/vehicles')

const list = (req, res) => {
  res.json(vehicles)
}

const show = (req, res) => {
  res.json(vehicles.find(contact => contact._id == req.params.id))
}

const create = (req,res) => {
  let payload = req.body
  payload._id = 1;
  vehicles.map(contact => {
    contact._id = contact._id + 1;
  }) 
   
  vehicles.push(payload);
  
// let last = vehicles.pop()._id;
// payload._id = last + 1;  
  res.json(vehicles)
}

module.exports = { list, show, create}