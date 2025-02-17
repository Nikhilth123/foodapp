const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;


const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");

        const fetched_data = mongoose.connection.db.collection("food_varities");

        // Fetch data correctly
        const data = await fetched_data.find({}).toArray();

        // Assign to global variable
        global.food_varities = data;

        
        
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

module.exports = mongoDB;
