import React, { useState, useEffect } from 'react';
import './MarsPhotos.css'; // Import the CSS file

function MarsPhotos() {
  const [photos, setPhotos] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos);
      })
      .catch((error) => console.error('Error fetching Mars photos:', error));
  }, []);

  return (
    <div className="mars-photos-container"> {/* Apply CSS class for container */}
      <h2 className="mars-photos-title">Mars Rover Photos By Daniel</h2> {/* Apply CSS class for title */}
      <ul className="photos-list"> {/* Apply CSS class for the list */}
        {photos.map((photo) => (
          <li key={photo.id} className="photo-item"> {/* Apply CSS class for each photo item */}
            <img src={photo.img_src} alt={photo.id} className="photo-img" /> {/* Apply CSS class for each photo */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MarsPhotos;
