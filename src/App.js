import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Login from "./components/Login";

function App() {
  const User = "";
  return (
    <div className="App">
      {!User ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="App__Body">
            <Sidebar />
            <Feed />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
