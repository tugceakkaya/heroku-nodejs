const express = require("express");
const cors = require("cors");

const app = express();
const db= require("./models");
db.mongoose.connect(db.url,{useNewUrlParser:true, useUnifiedTopology:true
})
.then(()=>{
  console.log("connected to database");
})
.catch(err => {
  console.log("cannot connect to the database",err);
  process.exit();
})

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

// set port, listen for requests
require("./routes/tutorial.routes")(app);
const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log("App is running on port " + port);
});