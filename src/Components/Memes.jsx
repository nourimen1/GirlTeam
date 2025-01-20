import axios from 'axios'; // Import Axios
import { useEffect, useState } from 'react';

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
      <p className="text-lg text-gray-600 mt-4">
        Here are some memes fetched from the API:
      </p>

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
              
            </div>
          </div>
        ))}
      </div>

      {/* Description container */}
      <div className="mt-8 text-center max-w-3xl px-4">
        <h2 className="text-2xl font-semibold text-gray-800">Enjoy the memes!</h2>
        <p className="text-lg text-gray-600 mt-4">
          These are some of the funniest memes from the internet. Enjoy!
        </p>
      </div>

      <style jsx>{`
        .memes-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: start; /* Align items to the start */
          gap: 16px; /* Adds space between cards */
        }

        .meme-card {
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          width: 250px; /* Fixed width for each card */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .meme-card:hover {
          transform: translateY(-10px); /* Slightly lift the card on hover */
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .meme-card-image {
          width: 100%;
          height: 150px;
          object-fit: cover; /* Keeps the image aspect ratio intact */
        }

        .meme-card-body {
          padding: 16px;
        }

        .meme-card-body h5 {
          font-size: 1rem;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .meme-card-button {
          display: inline-block;
          padding: 8px 16px;
          background-color: #3182ce;
          color: white;
          text-align: center;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
        }

        .meme-card-button:hover {
          background-color: #2b6cb0;
        }

        @media (max-width: 768px) {
          .meme-card {
            width: 200px; /* Adjust card width on smaller screens */
          }
        }

        @media (max-width: 480px) {
          .meme-card {
            width: 150px; /* Adjust card width further on very small screens */
          }
        }
      `}</style>
    </div>
  );
}
