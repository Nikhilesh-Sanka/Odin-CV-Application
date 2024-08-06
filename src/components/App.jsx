import {
  PersonalDetailsForm,
  EducationSection,
  ExperienceSection,
} from "./forms.jsx";
import { Resume } from "./resume.jsx";
import { useState } from "react";

const examplePersonalDetails = {
  fullName: "John Smith",
  phoneNumber: "984828838283",
  email: "john2024@gmail.com",
  address: "London, UK",
};
const exampleEducationOne = {
  id: "1",
  school: "London School of Economic",
  degree: "Bachelor's in Economics",
  startDate: "19/09/2024",
  endDate: "20/09/2024",
  location: "London, UK",
  isVisible: true,
};
const exampleEducationTwo = {
  id: "2",
  school: "Singapore Institute of Technology",
  degree: "B.tech in Mechanical",
  startDate: "09/10/1999",
  endDate: "01/11/2003",
  location: "Singapore, Asia",
  isVisible: true,
};
const exampleExperienceOne = {
  id: "1",
  company: "Microsoft Inc.",
  position: "VP of Sales",
  startDate: "09/11/2022",
  endDate: "01/22/2024",
  location: "California, USA",
  description: "I Work at Microsoft",
  isVisible: true,
};
export function App() {
  let [personalDetails, setPersonalDetails] = useState(examplePersonalDetails);
  let [educationDetails, setEducationDetails] = useState({
    isFormOpen: false,
    isEducationOpen: false,
    educations: [exampleEducationOne, exampleEducationTwo],
    currentEducationBeingFilled: {
      id: null,
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
      isVisible: true,
    },
  });
  let [experienceDetails, setExperienceDetails] = useState({
    isFormOpen: false,
    isExperienceOpen: false,
    experiences: [exampleExperienceOne],
    currentExperienceBeingFilled: {
      id: null,
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
      isVisible: true,
    },
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
function ClearResume(props) {
  function clearResume() {
    props.setPersonalDetails({
      fullName: "",
      phoneNumber: "",
      email: "",
      address: "",
    });
    props.setEducationDetails({
      isFormOpen: false,
      isEducationOpen: false,
      educations: [],
      currentEducationBeingFilled: {
        id: null,
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
        isVisible: true,
      },
    });
    props.setExperienceDetails({
      isFormOpen: false,
      isExperienceOpen: false,
      experiences: [],
      currentExperienceBeingFilled: {
        id: null,
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
        isVisible: true,
      },
    });
  }
  return (
    <div className="clear-resume">
      <button id="clear-resume" onClick={clearResume}>
        Clear Resume
      </button>
    </div>
  );
}
