import mongoose from "mongoose";

const { Schema } = mongoose;

const OrderSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    order_data: {
        type: Array,
        required: true
    }
});

export default mongoose.model("Order", OrderSchema);
