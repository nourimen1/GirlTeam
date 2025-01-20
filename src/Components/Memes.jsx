import axios from 'axios'; // Import Axios
import { useEffect, useState } from 'react';
import './Memes.css'; // Import the CSS file

export default function Memes() {
  const [memes, setMemes] = useState([]); 
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await axios.get('https://api.imgflip.com/get_memes');  // Use Axios for GET request
        setMemes(response.data.data.memes);  // Access the memes data from response
      } catch (error) {
        setError(error.message);  // Handle errors
      } finally {
        setLoading(false);  // Stop loading once the request is done
      }
    };

    fetchMemes();  // Call the fetchMemes function
  }, []);  // Empty dependency array to run once on component mount

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Loading memes...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">Error: {error}</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800">Memes Page</h1>
       
      {/* Flex container for memes in a horizontal row */}
      <div className="memes-container">
        {memes.map((meme, index) => (
          <div key={index} className="meme-card">
            <img 
              src={meme.url}  
              className="meme-card-image" 
              alt={`Meme ${index + 1}`} 
            />
            <div className="meme-card-body">
              <h5 className="text-lg font-semibold">{meme.name}</h5>
              {/* View Therapy Button */}
              <button className="view-therapy-btn">View Therapy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
