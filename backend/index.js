require('dotenv').config(); // Load variables from .env

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

const customerSchema = new mongoose.Schema({
  name: String,
  contactNumber: String,
  email: String,
  address: String,
  balance: Number,
});

const Customer = mongoose.model('Customer', customerSchema);

app.post('/api/customers', (req, res) => {
  const { name, contactNumber, email, address } = req.body;

  const newCustomer = new Customer({
    name,
    contactNumber,
    email,
    address,
    balance: 0,
  });

  newCustomer.save()
    .then(() => {
      res.status(201).send('Customer registered successfully.');
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
