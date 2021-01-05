import React from "react";
import HeadingInfo from "./HeadingInfo/HeadingInfo";
import ExtraChoices from "./ExtraChoices/ExtraChoices";
import ImageTransitionSection from "./ImageTransition/ImageTransition";
import PartsChoices from "./PartsChoices/PartsChoices";

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
