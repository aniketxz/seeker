import mongoose, { mongo } from "mongoose";

// Connect to the MongoDB database

const connectDB = async () => {
  mongoose.connection.on('connected', () => console.log('Database connected'))

  await mongoose.connect(`${process.env.MONGODB_URI}/seeker`)
}

export default connectDB