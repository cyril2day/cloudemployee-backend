import mongoose from 'mongoose'
const Schema = mongoose.Schema


export type PlanChild = {
  name: string
  type: string
}

const planChildSchema = new Schema<PlanChild>({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true
  },
}, { timestamps: true })

const PlanChild = mongoose.model('PlanChild', planChildSchema)

export default PlanChild
