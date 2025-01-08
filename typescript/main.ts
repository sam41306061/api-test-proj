import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);

// Configure environment variables
process.env.PORT = String(process.env.PORT || 30000);

// Configure Swagger
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./json/swagger.json";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Ping endpoint
app.post("/ping", async (req, res) => {
  // TODO: Implement ping endpoint logic
  // - Extract message parameter from request body
  // - Call Postman Echo service with extracted message
  // - Get response from Postman Echo
  // - Create response object with echo, timestamp, env, and version
  // - Send response back to client

  // Example:
  const message = req.body.message;

  // TODO: Call Postman Echo service
  // const echoResponse = await callPostmanEcho(message);

  // TODO: Create response object
  // const response = {
  //   echo: echoResponse,
  //   timestamp: Date.now(),
  //   env: process.env.NODE_ENV,
  //   version: '1.0.0'
  // };

  // TODO: Send response back to client
  // res.status(200).json(response);
});

// TODO: Implement unit tests for ping endpoint

// TODO: Implement integration tests for ping endpoint

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
