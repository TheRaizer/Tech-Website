import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import "./parts-choices.css";
import { partsIcons } from "../PartsData";

function PartsChoices() {
  return (
    <div className="parts-choices">
      <h1>Choose Your Part</h1>
      <section className="parts-images">
        {partsIcons.map((icon) => {
          return <Icon key={icon.id} iconSrc={icon.src} id={icon.id} />;
        })}
      </section>
    </div>
  );
}

const Icon = (props) => {
  const [hovering, setHovering] = useState(false);
  const animProps = useSpring({
    transform: hovering ? "scale(1.2)" : "scale(1)",
    config: { duration: 100 },
  });

  return (
    <Link to={`/part/${props.id}`}>
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

export default PartsChoices;
