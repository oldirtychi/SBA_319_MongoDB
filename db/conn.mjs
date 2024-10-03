// import { MongoClient } from "mongodb";

// const connectionString = process.env.ATLAS_URI || "";

// const client = new MongoClient(connectionString);

// let conn;
// try {
//     conn = await client.connect();
// }   catch (e) {
//     console.error(e);
// }

// let db = conn.db("");

// export default db;
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        consol.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;