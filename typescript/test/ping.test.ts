import { response } from "express";
import { app } from "../main";
import request from "supertest";

describe("Ping endpoint", () => {
  it("should return an echo message", async () => {
    const response = await request(app)
      .post("/ping")
      .send({ message: "Hello from Postman!" });
    expect(response.status).toBe(200);
    console.log("Response body:", response.body);
    expect(response.body.echo).toBeDefined();
    expect(response.body.timestamp).toBeDefined();
    expect(response.body.env).toBeDefined();
    expect(response.body.version).toBeDefined();
  });
  it("should return new message to echo", async () => {
    const response = await request(app)
      .post("/ping")
      .send({ message: "Hello from I am the Howley" });
    expect(response.status).toBe(200);
    console.log("Response body:", response.body);
  });
  //negatvie test
  // it("should return an error if no message is provided", async () => {
  //   const response = await request(app).post("/ping").send({});
  //   expect(response.status).toBe(500);
  //   expect(response.body.error).toBeDefined();
  // });
});
