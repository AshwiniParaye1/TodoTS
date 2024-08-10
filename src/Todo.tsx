import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState(["Todo 1", "Todo 2"]);

  function addTodo() {
    console.log("Add Todo", todos);

    setTodos([...todos]);
  }

  console.log("Render Todo", todos);

  return (
    <div>
      <h1 className="text-3xl mb-2 ">Todo</h1>
      <input
        type="text"
        placeholder="Add Todo"
        className="mr-2 text-black border-2"
        onChange={(e) => setTodos([e.target.value, ...todos])}
      />
      <button
        onClick={addTodo}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
