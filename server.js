const io = require('socket.io')();

io.on('connection', client => {
  client.on('subscribeToServer', interval => {
    console.log(
      'client has subscribed to the socketio server. Updating at interval(ms): ',
      interval
    );
    setInterval(() => {
      let temp = +(10 + Math.random() * 10).toFixed(1);
      let humidity = +(80 + Math.random() * 10).toFixed(1);
      client.emit('reading', [Date.now(), temp, humidity]);
    }, interval);
  });
});

const port = 4001;
io.listen(port);
console.log('socketio server listening on port ', port);
