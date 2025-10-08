const express = require('express');
const cors = require('cors');
require('dotenv').config();

const newsCheckRoute = require('./routes/newsCheckRoute');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);
app.use(express.json());

app.use('/api/news', newsCheckRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
