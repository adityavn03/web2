import { useState } from 'react';
import './Todo.css';

export default function Todo() {
  const [choice, setChoice] = useState('off');
  const [multiplication, setMultiplication] = useState(0);
  const [todos, setTodos] = useState([
    {
      title: "daily routine",
      description: "go to gym",
      done: false
    },
  ]);

  function addTodo() {
    const newTodos = [...todos];
    newTodos.push({
      title: "morning",
      description: "study react",
      done: true
    });
    setTodos(newTodos);
  }

  function toggleChoice() {
    setChoice(choice === 'on' ? 'off' : 'on');
  }

  function multiply() {
    const p = Number(prompt("Enter first number:"));
    const n = Number(prompt("Enter second number:"));
    setMultiplication(p * n);
  }

  return (
    <div>
      <button onClick={toggleChoice}>Toggle practice: {choice}</button>
      <button onClick={multiply}>Multiplication: {multiplication}</button>
      <div>
        <button onClick={addTodo}>Add todo</button>
        <ul>
          {todos.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong>: {item.description} ({item.done ? "Done" : "Pending"})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
