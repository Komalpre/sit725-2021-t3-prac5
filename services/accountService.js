const { mongoClient } = require('./database');

const accountCollection = mongoClient.db('business-cards').collection('accounts');

// Get all documents
const getAll = (res) => {
  accountCollection.find().toArray((err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json(result);
  });
};

// Insert document
const insert = (data, res) => {
  accountCollection.insertOne(data, (err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({
      success: true,
      message: 'Account created',
      account: result,
    });
  });
};

// Delete document
const remove = (id, res) => {
  accountCollection.deleteOne({ _id: id }, (err) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({
      success: true,
      message: 'Account deleted',
    });
  });
};

// Authentication
const auth = (credentials, res) => {
  accountCollection.findOne(
    {
      email: credentials.email,
      password: credentials.password,
    },
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      if (!result) {
        return res.status(404).json({ message: 'Account does not exist' });
      }
      res.json({
        success: true,
        account: result,
      });
    },
  );
};

module.exports = {
  getAll,
  insert,
  remove,
  auth,
};
