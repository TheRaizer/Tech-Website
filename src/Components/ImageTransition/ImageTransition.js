import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import "./ImageTransition.css";

const productImages = [
  {
    id: 0,
    url:
      "https://images.unsplash.com/photo-1555626040-e1c570e4a213?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1550&q=80",
  },
  {
    id: 1,
    url:
      "https://images.unsplash.com/photo-1603481546579-65d935ba9cdd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: 2,
    url:
      "https://images.unsplash.com/photo-1513366884929-f0b3bedfb653?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

function ImageTransition() {
  const [index, setIndex] = useState(0);
  const increment = () =>
    setIndex((index) => (index + 1) % productImages.length);

  const transitions = useTransition(productImages[index], (image) => image.id, {
    from: { opacity: 0, transform: "scale(1.05)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.9)" },
  });

  useEffect(() => {
    const interval = setInterval(increment, 3000);
    return () => {
      clearInterval(interval);
    };
  });

  return transitions.map(({ item, key, props }) => {
    return (
      <animated.div
        key={key}
        className="image"
        style={{ backgroundImage: `url('${item.url}')`, ...props }}
      />
    );
  });
}

function ImageTransitionSection() {
  return (
    <section className="image-section">
      <ImageTransition />
    </section>
  );
}

export default ImageTransitionSection;
