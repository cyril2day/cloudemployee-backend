import Plan from '../models/plan'


export function index(req, res) {
   Plan.find()
   .populate({
      path: 'children',
      populate: {
         path: 'children',
         model: 'PlanChild'
      }
   })
   .sort({ createdAt: -1 })
   .then(result => {
      res.send(result)
   })
   .catch(err => {
      res.send(err)
   })
}

export function create(req, res) {
   Plan.create(req.body)
   .then(result => {
      res.send(result)
   })
   .catch(err => {
      res.send(err)
   })
}

export function update(req, res) {
   const { children, ...restOfBody } = req.body

   Plan.findOneAndUpdate(
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
   Plan.findByIdAndDelete(req.params.id)
   .then(result => {
      res.send(`Plan has been deleted, ${result}`)
   })
   .catch(err => {
      res.send(`Could not delete plan. ${err.message}`)
   })
}
