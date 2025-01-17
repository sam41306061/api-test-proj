import express from "express";
// Configure Swagger
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./json/swagger.json";

const app = express();
const port = parseInt(process.env.PORT || "0") || 42069;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Ping endpoint
app.post("/ping", async (req, res) => {
  try {
    const message: string = req.body.message;
    // check if there is no message or a bad value
    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Message is missing or is not a string" });
    }
    const echoResponse = `Echo: ${message}`;
    const response = {
      echo: echoResponse,
      timestamp: new Date().toISOString(),
      env: process.env.NODE_ENV,
      version: "1.0.0",
      originalMessage: message,
    };
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// TODO: Implement integration tests for ping endpoint

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export { app };
