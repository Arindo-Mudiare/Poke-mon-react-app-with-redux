import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About Us</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
        commodi voluptatibus enim incidunt non, quos tempora porro praesentium
        asperiores nostrum!
      </p>
    </div>
  );
};

export default Rainbow(About);
