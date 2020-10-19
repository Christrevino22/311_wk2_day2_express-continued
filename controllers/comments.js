const comments = require('../data/comments')


const list = (req, res) => {
  res.json(comments)
}

const show = (req, res) => {
  res.json(comments.find(contact => contact._id == req.params.id))
}

const create = (req,res) => {
  let payload = req.body
  payload._id = 1;
  comments.map(contact => {
    contact._id = contact._id + 1;
  }) 
   
  comments.push(payload);
  
// let last = comments.pop()._id;
// payload._id = last + 1;  
  res.json(comments)
}

module.exports = { list, show, create}