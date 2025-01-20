import axios from 'axios';
import { useEffect, useState } from 'react';
import './Memes.css';

export default function Therapies() {
  const [therapies, setTherapies] = useState([]); 
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  
  const [expanded, setExpanded] = useState({}); 

  useEffect(() => {
    const fetchTherapies = async () => {
      try {
        const response = await axios.get('https://api.fda.gov/drug/label.json?search=therapy&limit=10');  
        setTherapies(response.data.results);  
      } catch (error) {
        setError(error.message);  
      } finally {
        setLoading(false);  
      }
    };

    fetchTherapies();  
  }, []);  

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  if (loading) return <h1>Loading therapies...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <div className="flex flex-col items-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800">Therapies Page</h1>
      
      <div className="memes-container">
        {therapies.map((therapy, index) => {
          const fullText = therapy.description ? therapy.description[0] : "No description available.";

          return (
            <div key={index} className="meme-card">
              <img 
                src="https://via.placeholder.com/150"
                className="meme-card-image" 
                alt={`Therapy ${index + 1}`} 
              />
              <div className="meme-card-body">
                <h5 className="text-lg font-semibold">
                  {therapy.spl_product_data_elements ? therapy.spl_product_data_elements[0] : "No Name Available"}
                </h5>
                <p className={`therapy-description ${expanded[index] ? "expanded" : "collapsed"}`}>
                  {fullText}
                </p>
                {fullText.split("\n").length > 7 && (
                  <button className="see-more-button" onClick={() => toggleExpand(index)}>
                    {expanded[index] ? "See Less" : "See More"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
