import PlanChild from '../models/planChild'


export function index(req, res) {
   PlanChild.find()
   .populate('children')
   .sort({ createdAt: -1 })
   .then(result => {
      res.send(result)
   })
   .catch(err => {
      res.send(err)
   })
}

export function create(req, res) {
   PlanChild.create(req.body)
   .then(result => {
      res.send(result)
   })
   .catch(err => {
      res.send(err)
   })
}

export function update(req, res) {
   const { children, ...restOfBody } = req.body

   PlanChild.findOneAndUpdate(
      { _id: req.params.id },
      { 
         ...restOfBody,
         $addToSet: { children: children }
      }, { new: true }
   )
   .populate('children')
   .then(result => {
      res.send(result)
   })
   .catch(err => {
      res.send(err)
   })
}

export function remove(req, res) {
   PlanChild.findByIdAndDelete(req.params.id)
   .then(result => {
      res.send(`Resource has been deleted, ${result}`)
   })
   .catch(err => {
      res.send(`Could not delete the resource. ${err.message}`)
   })
}
