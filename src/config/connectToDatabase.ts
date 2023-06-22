import mongoose from 'mongoose'

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string)
    console.log('MongoDB Connected')
  } catch (error: any) {
    console.log(error.message)
    process.exit(1)
  }
}

export default connectToDatabase
