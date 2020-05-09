import React from "react";
import { render } from "react-dom";
import TodoList from "./TodoList";

import "./index.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  color: "#F0F8FF"
};

const App = () => (
  <div style={styles}>
    <div className="title">Doer</div>
    <div className="oneLiner">Your daily to-do app</div>
    <TodoList />
  </div>
);

render(<App />, document.getElementById("root"));
