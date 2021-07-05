import React from "react";
import todoStore from "./stores/todoStore";
import { observer } from "mobx-react";
import Todo from "./Todo";

const TodoList = () => {
  const todoList = todoStore.todos.map((todo) => (
    <Todo todo={todo} todoId={todo.id} />
  ));

  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">{todoList}</ul>
      </div>
    </div>
  );
};
export default observer(TodoList);
