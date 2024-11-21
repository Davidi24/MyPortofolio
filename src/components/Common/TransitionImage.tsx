import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TransitionImageProps {
  children: React.ReactNode;
  _duration?: number;
}

const TransitionImage = ({ children , _duration = 1.2}: TransitionImageProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust trigger sensitivity
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
      transition={{
        duration: _duration, // Increase duration for slower fade-in
        ease: [0.42, 0, 0.58, 1], // Use a custom cubic-bezier for a smoother easing
      }}
      style={{ overflow: "hidden" }} // Prevent overflow issues
    >
      {children}
    </motion.div>
  );
};

export default TransitionImage;
