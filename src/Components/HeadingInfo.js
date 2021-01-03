import React from 'react';
import { useSpring, animated } from 'react-spring';
import './HeadingInfo.css';

function HeadingInfo() {
  const animProps = useSpring({
    from: { opacity: 0, marginTop: -400 },
    to: { opacity: 1, marginTop: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.header style={animProps} className='header'>
      <h1>Kronis</h1>
    </animated.header>
  );
}

export default HeadingInfo;
