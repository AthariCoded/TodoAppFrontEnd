import { useState } from "react";
import React from "react";
import todoStore from "./stores/todoStore";

const Form = () => {
  const [newTodo, setNewTodo] = useState({
    name: "",
    done: false,
    priority: "",
  });

  const handleChange = (event) => {
    setNewTodo({ ...newTodo, [event.target.name]: event.target.value });
  };

  const handlePriority = (event) => {
    setNewTodo({ ...newTodo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    todoStore.todoCreate(newTodo);
    setNewTodo({
      name: "",
      done: false,
      priority: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Enter a task..."
          onChange={handleChange}
          name="name"
          aria-label="task name"
          aria-describedby="button-addon2"
        />

        <button
          class="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          Add+
        </button>
      </div>
      <div className="select">
        <select onChange={handlePriority} name="priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
