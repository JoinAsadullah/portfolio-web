// app/api/contact/route.ts

import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

// Create a Mongoose schema for your data
const dataSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  subscribe: Boolean,
});


// Check if the model is already compiled
const DataModel = mongoose.models.Data || mongoose.model('Data', dataSchema);

export async function POST(request: Request) {
  const { name, email, phone, message, subscribe } = await request.json();

  try {
    // Connect to MongoDB using the connection string from .env
    await mongoose.connect(process.env.MONGODB_URI as string, {
    });

    // Create a new instance of the DataModel with the collected data
    const newData = new DataModel({ name, email, phone, message, subscribe });

    // Save the data to MongoDB
    await newData.save();

    // Close the MongoDB connection
    await mongoose.connection.close();

    // Send a response indicating successful data collection
    return NextResponse.json({ message: 'Data collected and stored successfully' });
  } catch (error) {
    console.error('Error occurred during data collection:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
