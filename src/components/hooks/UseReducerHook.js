import React, { useReducer, useState } from "react";

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

function UseReducerHook() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [string, setString] = useState("");

  const handleAddTodo = () => 
    string.trim() &&
      (dispatch({ type: "ADD_TODO", payload: string }), setString(""));
  

  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };
  
console.log("todos",todos);
  return (
    <div>
      <div className="pt-16 flex justify-center space-x-3">
        <input
          type="text"
          value={string}
          onChange={(e) => setString(e.target.value)}
          placeholder="Add"
          className="border pl-2"
        />
        <button
          className="bg-blue-900 text-white rounded h-9 px-3"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
      <ul className="grid justify-center gap-2 pt-3">
        {todos.map((todo) => (
          <li key={todo.id} className="flex space-x-4 items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button
              className="bg-red-600 text-white rounded h-9 px-3"
              onClick={() => handleRemoveTodo(todo.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UseReducerHook;
