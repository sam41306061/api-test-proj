import express from "express";
// Configure Swagger
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./json/swagger.json";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Ping endpoint
app.post("/ping", async (req, res) => {
  try {
    const message = req.body.message;
    if (!message) {
      res.status(400).json({ error: "Message is required" });
    }
    const echoResponse = `Echo: ${message}`;
    const response = {
      echo: echoResponse,
      timestamp: Date.now(),
      env: process.env.NODE_ENV,
      version: "1.0.0",
    };
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// TODO: Implement unit tests for ping endpoint

// TODO: Implement integration tests for ping endpoint

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export { app };
