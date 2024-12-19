import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', (e) => {
    console.log(`Received message: ${e.toString()}`);
    if(e.toString() === 'ping'){
      console.log('Pong');
    }
  })
});