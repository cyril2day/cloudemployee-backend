import mongoose,{ Schema } from 'mongoose'
import type { PlanChild } from './planChild'


export type Plan = {
  name: string
  description: string
  type: string
  status: string
  children?: Array<PlanChild>
}

const planSchema = new Schema<Plan>({
   name: {
    type: String,
    required: true,
   },
   description: {
    type: String,
    required: true,
   },
   type: {
    type: String,
    required: true
   },
   status: {
    type: String,
    required: true
   },
   children: [
     {
        type: Schema.Types.ObjectId,
        ref:'PlanChild'
     }
   ]
}, { timestamps: true })

const Plan = mongoose.model('Plan', planSchema)

export default Plan
