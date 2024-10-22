import React from "react";
import Chatbot from "./ChatBot";

function App() {
  return (
    <div style={appStyles}>
      <Chatbot />
    </div>
  );
}

const appStyles = {
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f0f0f0",
};

export default App;
