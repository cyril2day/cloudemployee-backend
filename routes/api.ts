import express from 'express'
import Plan from '../models/plan'
import PlanChild from '../models/planChild'

const router = express.Router()


/**
 * Plan Resource Routes
 */

router.get('/plans', function(req, res) {
   Plan.find().sort({ createdAt: -1 })
   .then((result: any) => {
      console.log(result)
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


/**
 * PlanChild Resource Routes
 */

router.get('/plan-children', function(req, res) {
   PlanChild.find().sort({ createdAt: -1 })
   .then((result: any) => {
      console.log(result)
      res.send(result)
   })
   .catch((err: any) => {
      console.log(err)
      res.send(err.message)
   })
})

router.post('/plan-children', function(req, res) {
   console.log(req)

   res.send({ planChildReqParams: req.params })
})



export default router
