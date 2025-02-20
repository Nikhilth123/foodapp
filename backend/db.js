import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
const mongoURI = process.env.MONGO_URI;

const mongoDB = async () => {
    try {

        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");

        const db = mongoose.connection.db;

        // Fetch data using Promise.all
        const [foodVarieties, foodItems] = await Promise.all([
            db.collection("food_varities").find({}).toArray(),
            db.collection("food_items").find({}).toArray()
        ]);


        // Assign to global variables
        global.food_varities = foodVarieties;
        global.food_items = foodItems;

        console.log("Data successfully loaded into global variables");

    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default mongoDB