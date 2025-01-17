const http = require("http");

const port = parseInt(process.env.PORT) || 42069;
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    console.log("Hello, The party line");
    res.end();
  }
});
server.listen(port, () => {
  console.log("Server on at the party line", port);
});
