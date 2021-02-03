import React, { useEffect } from "react";
import HeadingInfo from "./HeadingInfo/HeadingInfo";
import ExtraChoices from "./ExtraChoices/ExtraChoices";
import ImageTransitionSection from "./ImageTransition/ImageTransition";
import PartsChoices from "./PartsChoices/PartsChoices";
import Footer from "./Footer/Footer";

function Home() {
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);
  return (
    <section>
      <HeadingInfo />
      <ExtraChoices />
      <ImageTransitionSection />
      <PartsChoices />
      <Footer />
    </section>
  );
}

export default Home;
