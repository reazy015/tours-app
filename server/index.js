const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

connectDB();

const PORT = process.env.PORT || 4444;

app.use(express.json({ extended: false }));
app.use(cors());

app.get('/', (req, res) => res.json({msg: 'Message from server'}));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
