import React from "react";
import HeadingInfo from "./HeadingInfo/HeadingInfo";
import ExtraChoices from "./ExtraChoices/ExtraChoices";
import ImageTransitionSection from "./ImageTransition/ImageTransition";
import PartsChoices from "./PartsChoices/PartsChoices";

//TEST
import { persistor } from "../Actions/store";

function Home() {
  return (
    <section>
      <HeadingInfo />
      <ExtraChoices />
      <ImageTransitionSection />
      <PartsChoices />

      {/* Testing persistor purge and signing out of current user. persistor.purge() clears the persisted data in the store */}
      <button onClick={() => persistor.purge()}>Flush User/Sign Out</button>
    </section>
  );
}

export default Home;
