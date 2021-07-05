import "./App.css";
import Form from "./components/Form";
import { Wrapper } from "./styles";
import TodoList from "./components/TodoList";
import { ThemeProvider } from "styled-components";
//import { GlobalStyle } from "./styles";

const theme = {
  mainColor: "red",
  backgroundColor: "#cfc0bd",
};

function App() {
  return (
    <div className="App">
      <Wrapper>
        <ThemeProvider theme={theme}>
          <h1>Todo List</h1>
          <Form />
          <div>
            <ul>
              <TodoList />
            </ul>
          </div>
        </ThemeProvider>
      </Wrapper>
    </div>
  );
}

export default App;
