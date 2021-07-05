import axios from "axios";
import { makeAutoObservable } from "mobx";

class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchTodos = async () => {
    try {
      //web request to server to get todos
      const response = await axios.get("http://localhost:8000/todos");
      this.todos = response.data;
    } catch (error) {
      console.error("fetchTodos: ", error);
    }
  };

  todoCreate = async (newTodo) => {
    try {
      const response = await axios.post("http://localhost:8000/todos", newTodo);
      this.todos.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  todoDelete = async (todoId) => {
    try {
      await axios.delete(`http://localhost:8000/todos/${todoId}`);
      const updatedTodos = this.todos.filter((todo) => todo.id !== todoId);
      this.todos = updatedTodos;
    } catch (error) {
      console.error(error);
    }
  };

  updateFinish = async (updateTodo) => {
    try {
      await axios.put(
        `http://localhost:8000/todos/${updateTodo.id}`,
        updateTodo
      );
      const todo = this.todos.find((todo) => todo.id === updateTodo.id);
      for (const key in todo) todo[key] = updateTodo[key];
      //todo.done = updateTodo.done;
    } catch (error) {
      console.error(error);
    }
  };

  updateHigh = async (updateTodo) => {
    try {
      await axios.put(
        `http://localhost:8000/todos/${updateTodo.id}`,
        updateTodo
      );
      const todo = this.todos.find((todo) => todo.id === updateTodo.id);
      for (const key in todo) todo[key] = updateTodo[key];
      //todo.done = updateTodo.done;
    } catch (error) {
      console.error(error);
    }
  };
}
const todoStore = new TodoStore();
todoStore.fetchTodos();

export default todoStore;
