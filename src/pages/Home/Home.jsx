import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Background Particles */}
        <FloatingNote top="10%" left="5%" delay={0}>
        "Kai zala vedya"
        </FloatingNote>

        <FloatingNote top="15%" right="10%" delay={1}>
        "paisa udana seekh le"
        </FloatingNote>

        {/* BOTTOM ZONE (Message Area) */}
        {/* Notice we use high 'top' % to push them way down */}
        <FloatingNote top="85%" left="5%" delay={2}>
        "My support {'<3'}"
        </FloatingNote>

        <FloatingNote top="80%" right="5%" delay={1.5}>
        "Best friends forever"
        </FloatingNote>

      {/* --- SECTION 1: TOP CONTENT (Centered) --- */}
      <div className="content-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Button */}
          <motion.button 
            className="timer-link-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/countdown")}
          >
            ⏳ Check the Countdown
          </motion.button>

          {/* Header */}
          <h1 className="birthday-header">Happy Birthday Shradhha! 🌸</h1>
          <p className="birthday-subtext">Welcome to your special memory lane.</p>
        </motion.div>
      </div>

      {/* --- SECTION 2: CAROUSEL (Full Width) --- */}
      {/* Notice: This is OUTSIDE the content-wrapper now */}
      <motion.div 
          className="carousel-wrapper-style"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
      >
         <ImageCarousel />
      </motion.div>

      {/* --- SECTION 3: BOTTOM CONTENT (Centered) --- */}
      <div className="content-wrapper">
        <motion.div 
          className="message-box"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>A Little Note 💌</h2>
          <p>
           "Happy Birthday, Shraddha :)
            Looking back at the last three years, I’m so grateful for every memory we’ve sketched out together. They say the best things come in small packages, and at 5 feet exactly, you’re proof that it’s true - you have the biggest heart and the most incredible talent of anyone I know.
            Your friendship has added so much color to my life, and I’m so glad we have our shared love for art to keep us inspired. I hope this year is a total masterpiece for you, filled with as much joy and creativity as you give to the world. Cheers to many more years of being best friends!"
          </p>
        </motion.div>
      </div>

    </div>
  );
};

// --- Helper Components (Keep these at the bottom) ---

const FloatingNote = ({ children, top, left, right, delay }) => {
  return (
    <motion.div
      className="floating-note"
      style={{ top, left, right }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 0.8, y: [0, -15, 0] }}
      transition={{
        opacity: { duration: 1, delay: delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }
      }}
      whileHover={{ scale: 1.1, opacity: 1, zIndex: 100 }}
    >
      {children}
    </motion.div>
  );
};

const FloatingShapes = () => (
  <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        style={{
          position: "absolute",
          background: "rgba(255, 255, 255, 0.4)",
          borderRadius: "50%",
          width: Math.random() * 200 + 50,
          height: Math.random() * 200 + 50,
          top: Math.random() * 100 + "%",
          left: Math.random() * 100 + "%",
          filter: "blur(50px)",
        }}
        animate={{
          y: [0, -100, 0],
          x: [0, 50, -50, 0],
        }}
        transition={{
          duration: Math.random() * 10 + 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default Home;