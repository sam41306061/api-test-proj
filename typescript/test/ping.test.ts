import { app } from "../main";
import request from "supertest";

describe("Ping endpoint", () => {
  it("should return an echo message", async () => {
    const response = await request(app)
      .post("/ping")
      .send({ message: "Hello from Postman!" });
    expect(response.status).toBe(200);
    expect(response.body.echo).toBeDefined();
    expect(response.body.timestamp).toBeDefined();
    expect(response.body.env).toBeDefined();
    expect(response.body.version).toBeDefined();
  });
  it("should return new message to echo", async () => {
    expect("Todo");
    // const response = await request(app)
    //   .post("/ping")
    //   .send({ message: "Hello from I am the Howley" });
    // expect(response.status).toBe(200);
    // expect(response.body.message).toBe("Hello from I am the Howley");
  });
});
