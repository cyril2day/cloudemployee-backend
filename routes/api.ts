import express from 'express'
import Plan from '../models/plan'

const router = express.Router()


router.get('/plans', function(req, res) {
   Plan.find().sort({ createdAt: -1 })
   .then((result: any) => {
      res.send(result)
   })
   .catch((err: any) => {
      console.log(err)
      res.send(err.message)
   })
})

router.post('/plans', function(req, res) {
   console.log(req)

   res.send({ reqParams: req.params })
})


export default router
