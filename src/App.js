import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Login from "./components/Login";
import { useStateValue } from "./common/StateProvider";
import RightSideBar from "./components/RightSideBar";

function App() {
  const [{ User }, dispatch] = useStateValue();
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
            <RightSideBar />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
