import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Countdown.css";

const Countdown = ({ targetDate }) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isBirthday, setIsBirthday] = useState(false);

  function calculateTimeLeft() {
    const difference = targetDate - new Date().getTime();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeLeft();
      if (!remaining) {
        clearInterval(timer);
        setIsBirthday(true);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back to Photos
      </button>

      {!isBirthday ? (
        <>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="countdown-title"
          >
            Counting Down... ⏳
          </motion.h1>

          <div className="timer-wrapper">
            {timeLeft && Object.entries(timeLeft).map(([unit, value]) => (
              <motion.div 
                key={unit} 
                className="time-box"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <span className="time-value">{value}</span>
                <span className="time-label">{unit}</span>
              </motion.div>
            ))}
          </div>
        </>
      ) : (
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          className="celebration-message"
        >
          <h1>🎉 IT'S TIME! 🎉</h1>
          <p>Happy Birthday Shradhha!</p>
        </motion.div>
      )}
    </div>
  );
};

export default Countdown;