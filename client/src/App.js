import React from "react";
import axios from "axios";
import "./App.css";
import Router from "./routes/Routes";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
