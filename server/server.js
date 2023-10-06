const express = require("express");
const mongoose = require("mongoose");
const StudentRoute = require("./routes/student.route");
const PORT = 3000;
const MONGO_URL = "mongodb+srv://zoro:zoro@nodeapi.0bkpkc9.mongodb.net/";

/* `const app = express();` is creating an instance of the Express application. This instance will be
used to define the routes and middleware for the server. */
const app = express();

/* `app.use(express.json())` is a middleware function that parses incoming requests with JSON payloads.
It allows the server to handle JSON data sent in the request body. */
app.use(express.json());
/* `app.use(express.urlencoded())` is a middleware function that parses incoming requests with
URL-encoded payloads. It allows the server to handle data sent in the request body using the
URL-encoded format. This is commonly used when submitting HTML forms. */
app.use(express.urlencoded({ extended: false }));

/* `app.use("/api/", StudentRoute);` is mounting the `StudentRoute` middleware on the `/api/` path. */
app.use("/api/", StudentRoute);


/* It is starting the
server and listening for incoming requests on the specified port. Once the server is running, it
will log a message indicating that the server is running on the specified port. */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


/* Establishing a connection to a MongoDB database using
the provided `MONGO_URL`. */
mongoose.connect(MONGO_URL, {})
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });
