import axios from "axios";
import { useEffect, useState } from "react";

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

      <style jsx>{`
        .todos-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: start; /* Align items to the start */
          gap: 16px; /* Adds space between cards */
        }

        .todo-card {
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          width: 250px; /* Fixed width for each card */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 16px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .todo-card:hover {
          transform: translateY(-10px); /* Slightly lift the card on hover */
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .todo-card h2 {
          font-size: 1rem;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .todo-card p {
          font-size: 0.875rem;
          margin-bottom: 12px;
        }

        @media (max-width: 768px) {
          .todo-card {
            width: 200px; /* Adjust card width on smaller screens */
          }
        }

        @media (max-width: 480px) {
          .todo-card {
            width: 150px; /* Adjust card width further on very small screens */
          }
        }
      `}</style>
    </div>
  );
}
