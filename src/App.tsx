import React, {useState} from "react";
import { AddTodoForm } from "./AddTodoForm";
import './App.css';
import { TodoList } from './TodoList';

const initialTodos: Array<Todo> = [
  {text: "egg", complete: true},
  {text: "milk", complete: false}
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => { // selectedTodo has the Todo types
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo){
        return{
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && setTodos([...todos, {text: newTodo, complete: false}])
  }

  return (
    <div className="container">
      <div className="wrapper">
        <h1>Shopping List</h1>
        <AddTodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} />
      </div>
    </div>
  );
};

export default App;
