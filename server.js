const express = require("express");
const app = express();
app.use(express.json());

// Express middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());

// Routes
app.use('/api/accounts', require('./routes/accounts'));
app.use('/api/contacts', require('./routes/contacts'));

// Serve home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/home.html');
});

const port = 3000;
app.listen(port, ()=>{
    console.log("E-shop is running on localhost:"+port);
});