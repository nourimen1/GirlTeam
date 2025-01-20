import axios from "axios";
import { useEffect, useState } from "react";
import './Todos.css'; // Import the external CSS file

export default function Users() {
  const [users, setUsers] = useState([]); // State to store users
  const [loading, setLoading] = useState(true); // State to show loading indicator

  // Use useEffect to fetch the data from the API
  useEffect(() => {
    // Function to fetch users
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/?results=100");
        setUsers(response.data.results); // Store the user data in state
      } catch (error) {
        console.error("Error fetching users:", error);
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
        <h1 className="text-4xl font-bold text-gray-800">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800">Users</h1>
       
      {/* Flex container for users in a horizontal layout */}
      <div className="users-container">
        {users.map((user) => (
          <div key={user.login.uuid} className="user-card">
            <h2 className="text-xl font-semibold text-gray-800">
              {user.name.title} {user.name.first} {user.name.last}
            </h2>
            <p className="text-sm text-gray-600">Gender: {user.gender}</p>
            <p className="text-sm text-gray-600">Location: {user.location.city}, {user.location.country}</p>
            <p className="text-sm text-gray-600">Email: {user.email}</p>
            <p className="text-sm text-gray-600">Phone: {user.phone}</p>
            <p className="text-sm text-gray-600">Cell: {user.cell}</p>
            <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className="rounded-full mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
