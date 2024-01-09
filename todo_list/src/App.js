import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = useState([]);

  // Add the handlesubmit code here
  function handleSubmit(e) {
    e.preventDefault();

    const todoInputElement = document.getElementById("todoAdd");
    const todo = todoInputElement["value"].trim();

    if (!todo) {
      return alert("Enter Valid Task");
    }

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };

    setTodos([...todos].concat(newTodo));
    todoInputElement["value"] = "";
  }


  // Add the deleteToDo code here
  function deleteToDo(id) {
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  // Add the toggleComplete code here
  function toggleComplete(id) {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }


  // Add the submitEdits code here


  return (
    <div id="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id='todoAdd' placeholder="Add a new task" />
        <button type="submit" > Add Todo </button>
      </form>
      {
        todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <div className="todo-text">
              {todo.text}
              <input type="checkbox" id="completed" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
            </div>
            <button onClick={() => deleteToDo(todo.id)}>Delete</button>
          </div>
        ))
      }
    </div>
  );
};
export default App;
