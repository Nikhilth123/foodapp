const express = require('express');
const app = express();
const mongoDB = require('./db'); 
const PORT =  process.env.PORT||5000;
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
  })
mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.use(express.json());
app.use('/api',require("./routes/CreateUsers"));
app.use('/api',require("./routes/DisplayData"));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
