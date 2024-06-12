import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GetRequest from "./Requests/GetRequest";
import PostRequest from "./Requests/PostRequest";
import PutRequest from "./Requests/PutRequest";
import DeleteRequest from "./Requests/DeleteRequest";
import HandleErrors from "./HandleErrors/HandleErrors";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GetRequest />
        <PostRequest />
        <PutRequest />
        <DeleteRequest />
        <HandleErrors />
      </header>
    </div>
  );
}

export default App;
