import React from "react";
import Links from "./Links";

function About({bio,github,likedin}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {!bio || bio ===""?null:<p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <links github={github} likedin={likedin}></links>
    </div>
  );
}

export default About;
