import mongoose from 'mongoose'
const Schema = mongoose.Schema


export type PlanChild = {
  name: string
  type: string
  parent: any
  children?: any[]
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
  parent: {
     type: Schema.Types.ObjectId,
     ref: 'Plan'
  },
  children: [
     {
        type: Schema.Types.ObjectId,
        ref: 'PlanChild'
     }
  ]
}, { timestamps: true })

const PlanChild = mongoose.model('PlanChild', planChildSchema)

export default PlanChild
