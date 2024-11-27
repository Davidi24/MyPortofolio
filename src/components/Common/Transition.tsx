import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Direction = "left" | "right" | "up" | "down";

interface TransitionProps {
  children: React.ReactNode;
  direction?: Direction;
  _duration?: number;
  className?: string; // Add className prop to accept external classes
}

const Transition = ({ children, direction = "left", _duration = 0.8, className = "" }: TransitionProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeInVariants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
      transition={{ duration: _duration, ease: "easeOut" }}
      className={className} // Apply the incoming className here
    >
      {children}
    </motion.div>
  );
};

export default Transition;
