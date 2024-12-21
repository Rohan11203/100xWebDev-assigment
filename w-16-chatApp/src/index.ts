import { WebSocketServer,WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User{
  socket: WebSocket;
  roomId: string;
  user: string;
}

let allSocketUser: User[] = [];

const MAX_USERS_PER_ROOM = 4;

wss.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("message", (message) => {
    const parsedMessage  = JSON.parse(message.toString());

    if(parsedMessage.type === "join"){
      const { roomId, userId } = parsedMessage.payload;
      const usersInRoom = allSocketUser.filter((user) => user.roomId === roomId);
      
      if(usersInRoom.length >= MAX_USERS_PER_ROOM){
        socket.send(JSON.stringify({ type: "error", message: "Room is full" }));
        return;
      }

      allSocketUser.push({
        socket,
        roomId: parsedMessage.payload.roomId,
        user: parsedMessage.payload.userId,
      })

      console.log(`User ${parsedMessage.payload.userId} joined room ${parsedMessage.payload.roomId}`);
    }

    if(parsedMessage.type === "chat"){
      
      const currentChatRoom = allSocketUser.find((user) => user.socket == socket)?.roomId

      allSocketUser.forEach(user => {
        if(user.roomId === currentChatRoom){
          user.socket.send(JSON.stringify(parsedMessage.payload.message));
        }
      })
    }

  });
})