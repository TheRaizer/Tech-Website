import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

export const ClickableImage = (props) => {
  const [hovering, setHovering] = useState(false);
  const animProps = useSpring({
    transform: hovering ? "scale(1.2)" : "scale(1)",
    config: { duration: 100 },
  });

  return (
    <Link to={props.link}>
      <animated.img
        style={animProps}
        draggable="false"
        src={props.iconSrc}
        alt="unavailable"
        onMouseOver={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      />
    </Link>
  );
};

export default ClickableImage;
