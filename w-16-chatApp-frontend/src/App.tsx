import { useEffect, useRef, useState } from "react";
import "./App.css";

interface Message {
  userId: string;
  content: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const wsRef = useRef<WebSocket | null>(null);

  const colors: { [key: string]: string } = {}; // To store unique colors for each user

  function getUserColor(userId: string) {
    if (!colors[userId]) {
      colors[userId] = `hsl(${Math.random() * 360}, 70%, 70%)`; // Assign a random color
    }
    return colors[userId];
  }

  const sendMessage = () => {
    if (!wsRef.current) {
      console.log("No WebSocket connection");
      return;
    }
    const messageContent = inputRef.current?.value;
    if (!messageContent) return;

    wsRef.current.send(
      JSON.stringify({
        type: "chat",
        payload: {
          message: messageContent,
        },
      })
    );
    inputRef.current.value = ""; // Clear input field
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");

    ws.onmessage = (e) => {
      console.log("Received message:", e.data);
      const parsedData = JSON.parse(e.data);

      if (parsedData.type === "chat") {
        setMessages((m) => [
          ...m,
          { userId: parsedData.payload.userId, content: parsedData.payload.message },
        ]);
      }
    };

    ws.onopen = () => {
      console.log("Connected to server");

      const generatedUserId = `user-${Math.floor(Math.random() * 1000)}`;
      setUserId(generatedUserId);

      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "123",
            userId: generatedUserId,
          },
        })
      );
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    wsRef.current = ws;

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="w-full max-w-md p-4 bg-black shadow-lg rounded-lg">
        <div className="overflow-y-auto max-h-60 bg-black p-4 rounded-lg border-2">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`mb-2 break-words p-2 rounded-lg ${
                msg.userId === userId
                  ? "bg-purple-500 text-white self-end"
                  : "bg-gray-700 text-white self-start"
              }`}
              style={{
                color: msg.userId !== userId ? getUserColor(msg.userId) : "white",
                alignSelf: msg.userId === userId ? "flex-end" : "flex-start",
                maxWidth: "75%",
              }}
            >
              {msg.userId !== userId && (
                <p className="text-sm font-bold">{msg.userId}</p>
              )}
              <p>{msg.content}</p>
            </div>
          ))}
        </div>
        <div className="flex mt-4 gap-2">
          <input
            className="flex-1 px-3 py-2 text-gray-800 bg-purple-100 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            ref={inputRef}
            type="text"
            placeholder="Enter your message"
          />
          <button
            className="px-4 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:ring-2 focus:ring-purple-300"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
