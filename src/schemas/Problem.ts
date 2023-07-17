import { Schema, model, models, Document, Types } from 'mongoose'

export type ProblemType = {
  id: string
  title: string
  category: string
  order: number
  problemStatement: string
  handlerFunction: string
  examples: [string]
  constraints: string
  starterCode: string
  videoId: string
}

const ProblemSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  starterCode: {
    type: String,
  },
  order: {
    type: Number,
    required: true,
  },
  problemStatement: {
    type: String,
    required: true,
  },
  examples: [
    {
      id: Number,
      inputText: String,
      outputText: String,
      explanation: String,
    },
  ],
  handlerFunction: {
    type: String,
  },
  constraints: {
    type: String,
  },
  videoId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
})

export const Problem = models.problem || model('problem', ProblemSchema)
