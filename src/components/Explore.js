import React, { useState, useEffect } from "react";
import "./styles/ExploreStyles.css";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Explore = () => {
  const [media, setMedia] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    fetchNASAData();
  }, []);

  const fetchNASAData = async () => {
    try {
      const response = await fetch(
        `https://images-api.nasa.gov/search?keywords=space&year_start=2020&year_end=2022&description=NASA&center=JPL&media_type=image`
      );
      const data = await response.json();
      setMedia(data.collection.items);
    } catch (error) {
      console.error("Error fetching NASA media:", error);
    }
  };

  const handleToggleDetails = (index) => {
    const selected = media[index];
    setSelectedMedia(selected);
  };

  const handleCloseModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="explore">
      <div className="card-container">
        {media.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.data[0].title}</h3>
            <span className="bar"></span>
            {item.data[0].media_type === "image" ? (
              item.links && item.links[0] && item.links[0].href ? (
                <img src={item.links[0].href} alt={item.data[0].title} />
              ) : (
                <p>No image available</p>
              )
            ) : (
              <video controls>
                <source src={item.links[0].href} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <p>{item.data[0].description.substring(0, 100)}...</p>
            <button onClick={() => handleToggleDetails(index)} className="btn">
              {item.expanded ? "Hide Details" : "See More"}
            </button>
          </div>
        ))}
      </div>
      {selectedMedia && (
        <Modal media={selectedMedia} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Explore;
