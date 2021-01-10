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

      <button
        onClick={() => {
          /* Testing persistor.purge() to remove the held user username. persistor.purge() clears the persisted data in the store */
          persistor.purge();
          localStorage.removeItem("user_id"); // removes the user_id from the persisted state held in the UserIdContextProvider
        }}
      >
        Flush User/Sign Out
      </button>
    </section>
  );
}

export default Home;
