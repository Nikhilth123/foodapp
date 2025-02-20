import express from "express"
const router = express.Router();
router.post('/foodData', (req, res) => {
    try {
        console.log("Data fetched from MongoDB:", global.food_varities);
        res.send([global.food_varities, global.food_items]);
    } catch (err) {
        console.error(err.message);
        res.send("server error");
    }
});
export default router