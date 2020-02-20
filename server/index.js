const express = require('express');
const bodyParser = require('body-parser');
process.env.NODE_CONFIG_DIR = __dirname + `\\config`;
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

connectDB();

const PORT = process.env.PORT || 4444;

app.use(bodyParser.json());
app.use(express.json({ extended: false }));
app.use(cors());

// Routes
app.use('/api/tours', require('./routes/api/tours'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

app.get('/', (req, res) => res.json({msg: 'Message from server'}));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
