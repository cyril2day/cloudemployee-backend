import express from 'express'

import {
   index as planIndex,
   create as planCreate,
   update as planUpdate,
   remove as planDelete
} from '../controllers/plan'

import {
   index as planChildIndex,
   create as planChildCreate,
   update as planChildUpdate,
   remove as planChildDelete
} from '../controllers/planChild'

const router = express.Router()


/**
 * Plan Resource Routes
 */

router.get('/plans', planIndex)

router.post('/plans', planCreate)

router.put('/plans/:id', planUpdate)

router.delete('/plans/:id', planDelete)


/**
 * PlanChild Resource Routes
 */

router.get('/plan-children', planChildIndex)

router.post('/plan-children', planChildCreate)

router.put('/plan-children/:id', planChildUpdate)

router.delete('/plan-children/:id', planChildDelete)


export default router
