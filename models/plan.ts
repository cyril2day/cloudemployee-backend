import mongoose from 'mongoose'
const Schema = mongoose.Schema


export type Plan = {
  name: string
  description: string
  type: string
  status: string
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
  }
}, { timestamps: true })

const Plan = mongoose.model('Plan', planSchema)

export default Plan
