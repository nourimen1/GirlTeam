import axios from "axios";
import { useEffect, useState } from "react";
import './Todos.css'; // Import the external CSS file

export default function Users() {
  const [users, setUsers] = useState([]); // State to store users
  const [loading, setLoading] = useState(true); // State to show loading indicator
  const [error, setError] = useState(null);  // State to handle errors

  // Use useEffect to fetch the data from the API
  useEffect(() => {
    // Function to fetch users
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/?results=100");
        setUsers(response.data.results); // Store the user data in state
      } catch (error) {
        setError(error.message); // Handle errors
      } finally {
        setLoading(false); // End loading when request is complete
      }
    };

    fetchUsers(); // Call the fetchUsers function
  }, []); // Empty dependency array to run once on component mount

  // If users are loading, show loading message
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Loading users...</h1>
      </div>
    );
  }

  // If there's an error, show error message
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Error: {error}</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800">Users</h1>

      {/* Flex container for users in a horizontal row */}
      <div className="todos-container">
        {users.map((user) => (
          <div key={user.login.uuid} className="todo-card">
            <img 
              src={user.picture.large} 
              alt={`${user.name.first} ${user.name.last}`} 
              className="rounded-full w-full mb-4" 
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {user.name.title} {user.name.first} {user.name.last}
            </h2>
            <p className="text-sm text-gray-600">Gender: {user.gender}</p>
            <p className="text-sm text-gray-600">Location: {user.location.city}, {user.location.country}</p>
            <p className="text-sm text-gray-600">Email: {user.email}</p>
            <p className="text-sm text-gray-600">Phone: {user.phone}</p>
            <p className="text-sm text-gray-600">Cell: {user.cell}</p>
            {/* Button for viewing more details */}
            <button className="view-therapy-btn">View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
}
