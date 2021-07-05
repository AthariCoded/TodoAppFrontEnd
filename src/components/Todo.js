import React from "react";
import { observer } from "mobx-react";
import todoStore from "./stores/todoStore";
import { useState } from "react";

const Todo = (props) => {
  const [finish, setFinish] = useState(false);
  // const [priority, setPriority] = useState("medium");

  const handleDelete = () => {
    todoStore.todoDelete(props.todo.id);
  };

  const handleFinish = () => {
    todoStore.updateFinish(props.todo);
    setFinish(!finish);
  };

  //const handleHigh = () => {
  // todoStore.updateHigh(props.todo);
  // setPriority("high");
  //};

  return (
    <div>
      <div className="todo">
        <li className={`todo-item ${finish ? "completed" : ""}`}>
          {props.todo.name}
        </li>
        <li>{finish ? " :Done " : ":Not Done "}</li>
        <li>
          {" - "}
          {props.todo.priority}
        </li>
        <button
          onClick={handleFinish}
          type="button"
          class="btn btn-secondary btn-sm"
        >
          ✓
        </button>
        <button
          onClick={handleDelete}
          type="button"
          class="btn-close"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};
export default observer(Todo);
