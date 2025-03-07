import express from "express"
import mongoDB from "./db.js";
import cors from "cors";
const app = express();
import DisplayDataRouter from "./routes/DisplayData.js";
import userRouter from "./routes/CreateUsers.js"
import orderRouter from "./routes/OrderData.js"
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: '*',
}));

mongoDB();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(express.json());

//app.use('/api/user);
app.use('/api/food', DisplayDataRouter);
app.use('/api/user', userRouter);
app.use('/api/order', orderRouter);



app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
