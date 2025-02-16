const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://nikhilth121:nikhil123@cluster0.weffk.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); 
    }
};

module.exports = mongoDB;
