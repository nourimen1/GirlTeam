import axios from "axios";
import { useEffect, useState } from "react";
import './Todos.css'; // Import the external CSS file

export default function Todos() {
  const [todos, setTodos] = useState([]); // State to store todos
  const [loading, setLoading] = useState(true); // State to show loading indicator

  // Use useEffect to fetch the data from the API
  useEffect(() => {
    // Function to fetch todos
    const fetchTodos = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setTodos(response.data); // Store the todos in state
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setLoading(false); // End loading when request is complete
      }
    };

    fetchTodos(); // Call the fetchTodos function
  }, []); // Empty dependency array to run once on component mount

  // If todos are loading, show loading message
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800">Todos</h1>
       
      {/* Flex container for todos in a horizontal layout */}
      <div className="todos-container">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-card">
            <h2 className="text-xl font-semibold text-gray-800">{todo.title}</h2>
            <p className={`text-sm ${todo.completed ? 'text-green-500' : 'text-red-500'}`}>
              {todo.completed ? "Completed" : "Not Completed"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
