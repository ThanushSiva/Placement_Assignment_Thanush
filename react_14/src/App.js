import React, { useReducer, useState } from 'react';
import "./App.css";

const initialState = {
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [...state.todos, { text: action.payload, completed: false }],
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map((todo, i) => {
          if (i === action.payload) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      };
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter((i) => i !== action.payload),
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };

  const toggleTodo = (i) => {
    dispatch({ type: 'TOGGLE_TODO', payload: i });
  };

  const deleteTodo = (i) => {
    dispatch({ type: 'DELETE_TODO', payload: i });
  };
  
  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {state.todos.map((todo, i) => (
          <li
            key={i}
            onClick={() => toggleTodo(i)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
            <button onClick={() => deleteTodo(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
