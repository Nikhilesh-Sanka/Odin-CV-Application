/** imports **/
import {
  PersonalDetailsForm,
  EducationSection,
  ExperienceSection,
} from "./forms.jsx";
import {
  exampleEducationOne,
  exampleEducationTwo,
  examplePersonalDetails,
  exampleExperienceOne,
} from "./examples.jsx";
import { ClearResume } from "./ClearResume.jsx";
import { Resume } from "./resume.jsx";
import { useState } from "react";
import {
  initialCurrentEducationDetails,
  initialCurrentExperienceDetails,
} from "./Variable.jsx";
/** imports **/

/** Main App */
export function App() {
  let [personalDetails, setPersonalDetails] = useState(examplePersonalDetails);
  let [educationDetails, setEducationDetails] = useState({
    isFormOpen: false,
    isEducationOpen: false,
    educations: [exampleEducationOne, exampleEducationTwo],
    currentEducationBeingFilled: initialCurrentEducationDetails,
  });
  let [experienceDetails, setExperienceDetails] = useState({
    isFormOpen: false,
    isExperienceOpen: false,
    experiences: [exampleExperienceOne],
    currentExperienceBeingFilled: initialCurrentExperienceDetails,
  });
  return (
    <>
      <div className="main">
        <ClearResume
          {...{
            setPersonalDetails,
            setEducationDetails,
            setExperienceDetails,
          }}
        />
        <PersonalDetailsForm
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
        <EducationSection
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
        />
        <ExperienceSection
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
        />
      </div>
      <div className="resume">
        <Resume
          personalDetails={personalDetails}
          educationDetails={educationDetails}
          experienceDetails={experienceDetails}
        />
      </div>
    </>
  );
}
/** Main App */
