import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Welcome! How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, sender: "user" }];
      setMessages(newMessages);
      setInput("");

      setTimeout(() => {
        handleBotResponse(newMessages);
      }, 500); // Simulate response time
    }
  };

  const handleBotResponse = (newMessages) => {
    const lastMessage = newMessages[newMessages.length - 1].text.toLowerCase();
    let botResponse = "Sorry, I don't understand that.";

    if (lastMessage.includes("hello") || lastMessage.includes("hi")) {
      botResponse = "Hello! How can I assist you today?";
    } else if (lastMessage.includes("bye")) {
      botResponse = "Goodbye! Have a great day!";
    } else if (lastMessage.includes("your name")) {
      botResponse = "I'm your friendly chatbot!";
    }

    setMessages([...newMessages, { text: botResponse, sender: "bot" }]);
  };

  return (
    <div style={styles.desktopAppContainer}>
      {/* Title bar */}
      <div style={styles.titleBar}>
        <div style={styles.titleBarText}>Chatbot Desktop App</div>
        <div style={styles.titleBarButtons}>
          <div style={styles.titleBarButton}>&#8212;</div>
          <div style={styles.titleBarButton}>&#9744;</div>
          <div style={styles.titleBarButton}>&#10005;</div>
        </div>
      </div>

      {/* Chat window */}
      <div style={styles.chatWindow}>
        <div style={styles.chatBox}>
          {messages.map((message, index) => (
            <div
              key={index}
              style={
                message.sender === "bot"
                  ? styles.botMessage
                  : styles.userMessage
              }
            >
              {message.text}
            </div>
          ))}
        </div>

        {/* Input area */}
        <div style={styles.inputArea}>
          <input
            style={styles.input}
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type a message..."
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <button style={styles.sendButton} onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  desktopAppContainer: {
    width: "400px",
    height: "600px",
    borderRadius: "8px",
    boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f0f0f0",
    fontFamily: "Arial, sans-serif",
    overflowY: "auto",
  },
  titleBar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#0078d7",
    color: "#fff",
    padding: "10px",
    fontSize: "14px",
    fontWeight: "bold",
    alignItems: "center",
  },
  titleBarText: {
    marginLeft: "10px",
  },
  titleBarButtons: {
    display: "flex",
    marginRight: "10px",
  },
  titleBarButton: {
    width: "20px",
    height: "20px",
    marginLeft: "5px",
    textAlign: "center",
    cursor: "pointer",
  },
  chatWindow: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  chatBox: {
    flex: 1,
    padding: "15px",
    overflowY: "auto",
    backgroundColor: "#e6e6e6",
    color: "black",
  },
  inputArea: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ccc",
    backgroundColor: "#f4f4f4",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginRight: "10px",
  },
  sendButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#0078d7",
    color: "#fff",
    cursor: "pointer",
  },
  botMessage: {
    textAlign: "left",
    backgroundColor: "#d1ecf1",
    borderRadius: "10px",
    padding: "10px",
    margin: "5px 0",
    maxWidth: "80%",
  },
  userMessage: {
    textAlign: "right",
    backgroundColor: "#c3e6cb",
    borderRadius: "10px",
    padding: "10px",
    margin: "5px 0",
    alignSelf: "flex-end",
    maxWidth: "80%",
  },
};

export default Chatbot;
