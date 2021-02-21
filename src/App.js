import React, { useState } from "react";
import "./App.css";

import { Container, Button, Form, FormInput } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function App() {
  // Setup our To-Do List
  const [todolist, setTodoList] = useState([
    // { text: "Groceries Shopping" },
    // { text: "Wash the Car" },
    // { text: "Take out the Rubbish" },
  ]);
  //Setup our Input Value
  const [value, setValue] = useState("");

  //Handle the Submission of the Form

  const handleSubmit = (mouseClick) => {
    mouseClick.preventDefault();
    addTodo(value);
    setValue("");
  };

  //Add To-Do

  const addTodo = (text) => {
    const updatedToDoList = [...todolist, { text }];
    setTodoList(updatedToDoList);
  };

  //Delete To-Do

  const handleDelete = (todo) => {
    const filteredToDoList = todolist.filter(
      (currentToDoListValue) => currentToDoListValue !== todo
    );
    setTodoList(filteredToDoList);
  };

  return (
    <Container>
      <h1>Sundeep's To-Do List</h1>
      <Container className="todoList">
        {todolist.map((todo, index) => (
          <div key={index}>
            <span>{todo.text}</span>
            <br />
            <Button onClick={() => handleDelete(todo)}>Delete</Button>
          </div>
        ))}
      </Container>
      <Container className="todoInput">
        <Form onSubmit={handleSubmit}>
          <FormInput
            placeholder="enter your ToDo"
            value={value}
            onChange={(keyboardStroke) => setValue(keyboardStroke.target.value)}
          />
          <Button type="submit">Add To-Do</Button>
        </Form>
      </Container>
    </Container>
  );
}

export default App;
