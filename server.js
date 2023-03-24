const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

function serverInit() {
  console.log("Creating server...");
  io.on("connection", socket => {
    console.log("User connected");
    socket.on("disconnect", e => {
      console.log("User disconnected");
    })
  });

  http.listen(5667, () => {
    console.log("listening on 5667");
  })
}

module.exports.serverInit = serverInit;