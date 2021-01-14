import React from "react";
import "./parts-choices.css";
import { partsIcons } from "../PartsData";
import ClickableImage from "../ClickableImage";

function PartsChoices() {
  return (
    <div className="parts-choices">
      <h1>Choose Your Part</h1>
      <section className="parts-images">
        {partsIcons.map((icon) => {
          return (
            <ClickableImage
              key={icon.id}
              iconSrc={icon.src}
              link={"/part/" + icon.name}
            />
          );
        })}
      </section>
    </div>
  );
}

export default PartsChoices;
