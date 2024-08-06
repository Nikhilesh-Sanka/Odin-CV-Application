import {
  PersonalDetailsForm,
  EducationSection,
  ExperienceSection,
} from "./forms.jsx";
import { Resume } from "./resume.jsx";
import { useState } from "react";

export function App() {
  return (
    <>
      <div className="main">
        <ClearResume />
        <PersonalDetailsForm />
        <EducationSection />
        <ExperienceSection />
      </div>
      <div className="resume">
        <Resume />
      </div>
    </>
  );
}
function ClearResume() {
  return (
    <div className="clear-resume">
      <button id="clear-resume">Clear Resume</button>
    </div>
  );
}
