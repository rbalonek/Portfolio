import React from "react";
import ProjectHeader from "../../Header/ProjectHeader/ProjectHeader";
import "./Cherry.css";

export default function Cherry() {
  return (
    <div id="cherry" className="cherry-container">
      <ProjectHeader
        navUp={"happy-space"}
        navDown={"about"}
        github={"https://github.com/rbalonek/cherry"}
        title={"Cherry Project"}
        website={"https://cherry-site.netlify.app/"}
      />
    </div>
  );
}
