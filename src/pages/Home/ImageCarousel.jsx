import React from "react";
import { motion } from "framer-motion";
import "./ImageCarousel.css";

// 1. Generate an array of numbers [1, 2, ... 20]
const images = Array.from({ length: 20 }, (_, i) => i + 1);

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
      <motion.div
        className="carousel-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 40,
          repeat: Infinity,
        }}
      >
        {/* Render images twice for infinite loop */}
        {[...images, ...images].map((num, index) => (
          <div className="carousel-item" key={index}>
            {/* CHANGED HERE: .jpeg extension */}
            <img 
              src={`/p${num}.jpeg`} 
              alt={`Memory ${num}`} 
              className="carousel-image" 
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageCarousel;