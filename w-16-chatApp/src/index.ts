import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

interface User  {
  socket: WebSocket;
  roomId: string;
}
const allSockets: User[] = []

wss.on('connection', (socket) => {

  console.log('Client connected');

  socket.on('message', (message) => {
    const parsedMessage = JSON.parse(message as unknown as string);
    if (parsedMessage.type === 'join') {
      allSockets.push({
        socket,
        roomId: parsedMessage.payload.roomId
      });
      console.log(`Client joined room: ${parsedMessage.payload.roomId}`);
    }
    if (parsedMessage.type === 'chat') {
      socket.send(JSON.stringify(parsedMessage.payload.message));
    }
  })

  socket.on("disconnect", () =>{
    console.log('Client disconnected');
    const user = allSockets.find((u) => u.socket === socket);
    if(user){
      allSockets.splice(allSockets.indexOf(user), 1);
      console.log(`Client left room: ${user.roomId}`);
    }
  })
})
  