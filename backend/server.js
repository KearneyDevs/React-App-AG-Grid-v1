import express from "express";
import routes from "./routes/routes.js";
const app = express();
const port = 3001;

// CORS middleware to allow requests from your React application
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Endpoint to forward requests to the external API
app.use("/api/", routes);

app.use((req, res) => {
  res.status(404).send("Not found");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
