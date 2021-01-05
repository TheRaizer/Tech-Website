import React from "react";
import { Link } from "react-router-dom";
import "./ExtraChoices.css";

function ExtraChoices() {
  return (
    <section className="extra-choices">
      {/* These will be links from react router they are accessed in css as the <a/> tag*/}
      <h3>
        <Link to="/shop">Shop</Link>
      </h3>
      <h3>
        <Link to="/deals">Deals</Link>
      </h3>
      <h3>
        <Link to="/services">Services</Link>
      </h3>
    </section>
  );
}

export default ExtraChoices;
