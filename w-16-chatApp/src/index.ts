import { WebSocketServer,WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User{
  socket: WebSocket;
  roomId: string;
}

let allSocketUser: User[] = [];
wss.on("connection", (socket) => {
  console.log("Client connected");
  socket.on("message", (message) => {
    const parsedMessage  = JSON.parse(message as unknown as string);

    if(parsedMessage.type === "join"){
      allSocketUser.push({
        socket,
        roomId: parsedMessage.payload.roomId
      })
      console.log(`User ${parsedMessage.payload.userId} joined room ${parsedMessage.payload.roomId}`);
    }

    if(parsedMessage.type === "chat"){
      
      const currentChatRoom = allSocketUser.find((s) => s.socket == socket)?.roomId

      allSocketUser.forEach(s => {
        if(s.roomId === currentChatRoom){
          s.socket.send(JSON.stringify(parsedMessage.payload.message));
        }
      })
    }

  });
})