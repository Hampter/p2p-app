const app2 = require('express')();
const http = require('http').Server(app2);
const io = require('socket.io')(http);

app2.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

var mySocket;

function serverInit() {
  console.log("Creating server...");
  io.on("connection", socket => {
    if (socket.handshake.address.split(":")[3] == "127.0.0.1") {
      console.log("Host connected");
      mySocket = socket;
    } else {
      console.log("User connected");
    } 
    socket.on("disconnect", e => {
      console.log("User disconnected");
    })
  });

  http.listen(5667, () => {
    console.log("Listening on 5667");
  })
}

module.exports.serverInit = serverInit;