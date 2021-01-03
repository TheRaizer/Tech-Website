import React from 'react';
import HeadingInfo from './HeadingInfo';
import ExtraChoices from './ExtraChoices';
import ImageTransitionSection from './ImageTransition';
import PartsChoices from './PartsChoices';

function Home() {
  return (
    <section>
      <HeadingInfo />
      <ExtraChoices />
      <ImageTransitionSection />
      <PartsChoices />
    </section>
  );
}

export default Home;
