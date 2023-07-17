import mongoose from 'mongoose'

const connectToDatabase = async (): Promise<void> => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI as string);
    }
    console.log('MongoDB Connected');
  } catch (error: any) {
    console.error('Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectToDatabase
