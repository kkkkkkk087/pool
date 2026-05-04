"use client";

import { motion, useInView, type Variants } from "motion/react";
import { useRef } from "react";

type AutoRevealingHeadingProps = {
  text: string;
  splitBy?: "letter" | "word";
  delay?: number;
  className?: string;
};

export function AutoRevealingHeading({
  text = "Auto Revealing Heading",
  splitBy = "word",
  delay = 0.08,
  className = "",
}: AutoRevealingHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = splitBy === "word" ? text.split(" ") : text.split("");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, rotateX: 45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`${className} perspective-1000`}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          className="inline-block"
          style={{ marginRight: splitBy === "word" ? "0.25em" : "0" }}
        >
          {word === "" ? "\u00A0" : word}
        </motion.span>
      ))}
    </motion.div>
  );
}
