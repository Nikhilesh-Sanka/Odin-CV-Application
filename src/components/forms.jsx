import { Fragment } from "react";

export function PersonalDetailsForm({ personalDetails, setPersonalDetails }) {
  function changePersonalDetails(property, newValue) {
    let newPersonalDetails = { ...personalDetails, [property]: newValue };
    setPersonalDetails(newPersonalDetails);
  }
  return (
    <div className="personal-details-form">
      <h2>Personal Details</h2>
      <label htmlFor="full-name">Full Name</label>
      <input
        type="text"
        id="full-name"
        placeholder="eg.John Smith"
        onChange={(e) => {
          changePersonalDetails("fullName", e.target.value);
        }}
        value={personalDetails.fullName}
      />
      <label htmlFor="phone-number">Phone Number</label>
      <input
        type="text"
        id="phone-number"
        placeholder="eg. +98057 98374"
        onChange={(e) => {
          changePersonalDetails("phoneNumber", e.target.value);
        }}
        value={personalDetails.phoneNumber}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        placeholder="john20242gmail.com"
        onChange={(e) => {
          changePersonalDetails("email", e.target.value);
        }}
        value={personalDetails.email}
      />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        placeholder="London, UK"
        onChange={(e) => {
          changePersonalDetails("address", e.target.value);
        }}
        value={personalDetails.address}
      />
    </div>
  );
}

// Education Section
export function EducationSection({ educationDetails, setEducationDetails }) {
  function openCloseEducation() {
    let newState = educationDetails.isEducationOpen === true ? false : true;
    let newEducationDetails = {
      ...educationDetails,
      isEducationOpen: newState,
    };
    setEducationDetails(newEducationDetails);
  }
  return (
    <div className="education-section">
      <h2 onClick={openCloseEducation}>Education</h2>
      {educationDetails.isFormOpen && educationDetails.isEducationOpen ? (
        <EducationForm
          educationDetails={educationDetails}
          setEducationDetails={setEducationDetails}
        />
      ) : null}
      {educationDetails.isEducationOpen && !educationDetails.isFormOpen ? (
        <>
          <Educations
            educationDetails={educationDetails}
            setEducationDetails={setEducationDetails}
          />
          <AddEducationButton
            educationDetails={educationDetails}
            setEducationDetails={setEducationDetails}
          />
        </>
      ) : null}
    </div>
  );
}
function EducationForm({ educationDetails, setEducationDetails }) {
  let currentEducationBeingFilled =
    educationDetails.currentEducationBeingFilled;
  function updateForm(property, newValue) {
    let newCurrentEducationBeingFilled = {
      ...currentEducationBeingFilled,
      [property]: newValue,
    };
    setEducationDetails({
      ...educationDetails,
      currentEducationBeingFilled: newCurrentEducationBeingFilled,
    });
  }
  function closeForm() {
    setEducationDetails({
      ...educationDetails,
      isFormOpen: false,
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
  }
  function addForm() {
    if (currentEducationBeingFilled.id === null) {
      let newEducationsArray = [...educationDetails.educations];
      newEducationsArray.push({
        ...currentEducationBeingFilled,
        id: `${educationDetails.educations.length + 1}`,
      });
      let newEducationDetails = {
        ...educationDetails,
        educations: newEducationsArray,
        currentEducationBeingFilled: {
          id: null,
          school: "",
          degree: "",
          startDate: "",
          endDate: "",
          location: "",
          isVisible: true,
        },
        isFormOpen: false,
      };
      setEducationDetails(newEducationDetails);
      return;
    }
    let newEducationsArray = [...educationDetails.educations];
    newEducationsArray = newEducationsArray.map((education) => {
      if (education.id !== currentEducationBeingFilled.id) {
        return education;
      }
      return currentEducationBeingFilled;
    });
    setEducationDetails({
      ...educationDetails,
      educations: newEducationsArray,
      currentEducationBeingFilled: {
        id: null,
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
        isVisible: true,
      },
      isFormOpen: false,
    });
  }
  function deleteEducation() {
    if (currentEducationBeingFilled.id === null) {
      closeForm();
      return;
    }
    let newEducationsArray = [...educationDetails.educations].filter(
      (education) => currentEducationBeingFilled.id !== education.id
    );
    resolveId(newEducationsArray);
    setEducationDetails({
      ...educationDetails,
      educations: newEducationsArray,
      isFormOpen: false,
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
  }
  return (
    <div className="education-form">
      <label htmlFor="school">School</label>
      <input
        type="text"
        id="school"
        placeholder="School"
        value={currentEducationBeingFilled.school}
        onChange={(e) => {
          updateForm("school", e.target.value);
        }}
      />
      <label htmlFor="degree">Degree/Specialization</label>
      <input
        type="text"
        id="degree"
        placeholder="Degree"
        value={currentEducationBeingFilled.degree}
        onChange={(e) => {
          updateForm("degree", e.target.value);
        }}
      />
      <div className="education-dates">
        <div>
          <label htmlFor="education-start-date">Start Date</label>
          <input
            type="text"
            id="education-start-date"
            placeholder="eg.19/09/2024"
            value={currentEducationBeingFilled.startDate}
            onChange={(e) => {
              updateForm("startDate", e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="education-end-date">End Date</label>
          <input
            type="text"
            id="education-end-date"
            placeholder="eg.20/09/2024"
            value={currentEducationBeingFilled.endDate}
            onChange={(e) => {
              updateForm("endDate", e.target.value);
            }}
          />
        </div>
      </div>
      <label htmlFor="education-location">Location</label>
      <input
        type="text"
        id="education-location"
        placeholder="London, UK"
        value={currentEducationBeingFilled.location}
        onChange={(e) => {
          updateForm("location", e.target.value);
        }}
      />
      <div className="education-form-buttons">
        <button id="delete" onClick={deleteEducation}>
          Delete
        </button>
        <button id="add" onClick={addForm}>
          Add
        </button>
        <button id="close" onClick={closeForm}>
          Close
        </button>
      </div>
    </div>
  );
}
function Educations({ educationDetails, setEducationDetails }) {
  function editEducation(education) {
    setEducationDetails({
      ...educationDetails,
      currentEducationBeingFilled: { ...education },
      isFormOpen: true,
    });
  }
  function changeEducationVisibility(changedEducation) {
    let newVisibilityValue = changedEducation.isVisible ? false : true;
    let newEducationsArray = educationDetails.educations.map((education) => {
      if (education.id === changedEducation.id) {
        return { ...education, isVisible: newVisibilityValue };
      }
      return education;
    });
    setEducationDetails({
      ...educationDetails,
      educations: newEducationsArray,
    });
  }
  return (
    <div className="rendered-educations">
      {educationDetails.educations.map((education) => {
        return (
          <Fragment key={education.id}>
            <div className="education">
              <h3 onClick={() => editEducation(education)}>
                {education.school !== "" ? education.school : "Nil"}
              </h3>
              <img
                src={`./public/${
                  education.isVisible ? "eye-icon.svg" : "slashed-eye-icon.svg"
                }`}
                width="25px"
                alt="toggle education-name on resume"
                onClick={() => {
                  changeEducationVisibility(education);
                }}
              />
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
function AddEducationButton({ educationDetails, setEducationDetails }) {
  function openEducationForm() {
    setEducationDetails({
      ...educationDetails,
      isFormOpen: true,
    });
  }
  return (
    <div className="add-education">
      <button id="add-education" onClick={openEducationForm}>
        +Add Education
      </button>
    </div>
  );
}

// Experience Section
export function ExperienceSection({ experienceDetails, setExperienceDetails }) {
  function openCloseExperience() {
    let newStatus = experienceDetails.isExperienceOpen ? false : true;
    setExperienceDetails({ ...experienceDetails, isExperienceOpen: newStatus });
  }
  return (
    <div className="experience-section">
      <h2 onClick={openCloseExperience}>Experience</h2>
      {experienceDetails.isFormOpen && experienceDetails.isExperienceOpen ? (
        <ExperienceForm
          experienceDetails={experienceDetails}
          setExperienceDetails={setExperienceDetails}
        />
      ) : null}
      {experienceDetails.isExperienceOpen && !experienceDetails.isFormOpen ? (
        <>
          <Experiences
            experienceDetails={experienceDetails}
            setExperienceDetails={setExperienceDetails}
          />
          <AddExperienceButton
            experienceDetails={experienceDetails}
            setExperienceDetails={setExperienceDetails}
          />
        </>
      ) : null}
    </div>
  );
}

function ExperienceForm({ experienceDetails, setExperienceDetails }) {
  let current = experienceDetails.currentExperienceBeingFilled;
  function changeValue(property, newValue) {
    let newCurrent = { ...current, [property]: newValue };
    setExperienceDetails({
      ...experienceDetails,
      currentExperienceBeingFilled: newCurrent,
    });
  }
  function closeForm() {
    setExperienceDetails({
      ...experienceDetails,
      isFormOpen: false,
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
    return;
  }
  function addExperience() {
    if (current.id === null) {
      let newExperiencesArray = [...experienceDetails.experiences];
      newExperiencesArray.push({
        ...current,
        id: `${experienceDetails.experiences.length + 1}`,
      });
      setExperienceDetails({
        ...experienceDetails,
        experiences: newExperiencesArray,
        isFormOpen: false,
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
      return;
    }
    let newExperiencesArray = [...experienceDetails.experiences].map(
      (experience) => {
        if (experience.id === current.id) {
          return current;
        }
        return experience;
      }
    );
    setExperienceDetails({
      ...experienceDetails,
      experiences: newExperiencesArray,
      isFormOpen: false,
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
  function deleteExperience() {
    if (current.id === null) {
      closeForm();
      return;
    }
    let newExperiencesArray = [...experienceDetails.experiences].filter(
      (experience) => {
        return experience.id !== current.id;
      }
    );
    resolveId(newExperiencesArray);
    setExperienceDetails({
      ...experienceDetails,
      isFormOpen: false,
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
      experiences: newExperiencesArray,
    });
  }
  return (
    <div className="experience-form">
      <label htmlFor="company">Company</label>
      <input
        type="text"
        id="company"
        placeholder="eg.Microsoft Inc."
        value={current.company}
        onChange={(e) => {
          changeValue("company", e.target.value);
        }}
      />
      <label htmlFor="position">Position</label>
      <input
        type="text"
        id="position"
        placeholder="eg.VP of sales"
        value={current.position}
        onChange={(e) => {
          changeValue("position", e.target.value);
        }}
      />
      <div className="experience-dates">
        <div>
          <label htmlFor="experience-start-date">Start Date</label>
          <input
            type="text"
            id="experience-start-date"
            placeholder="eg.08/07/2024"
            value={current.startDate}
            onChange={(e) => {
              changeValue("startDate", e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="experience-end-date">End Date</label>
          <input
            type="text"
            id="experience-end-date"
            placeholder="eg.09/10/2024"
            value={current.endDate}
            onChange={(e) => {
              changeValue("endDate", e.target.value);
            }}
          />
        </div>
      </div>
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        placeholder="eg.London, UK"
        value={current.location}
        onChange={(e) => {
          changeValue("location", e.target.value);
        }}
      />
      <label htmlFor="experience-description">Description</label>
      <textarea
        id="experience-description"
        value={current.description}
        onChange={(e) => {
          changeValue("description", e.target.value);
        }}
      ></textarea>
      <div className="experience-form-buttons">
        <button id="delete" onClick={deleteExperience}>
          Delete
        </button>
        <button id="add" onClick={addExperience}>
          Add
        </button>
        <button id="clear" onClick={closeForm}>
          Close
        </button>
      </div>
    </div>
  );
}
function Experiences({ experienceDetails, setExperienceDetails }) {
  function changeVisibility(changedExperience) {
    let newVisibility = changedExperience.isVisible ? false : true;
    let newExperiencesArray = [...experienceDetails.experiences].map(
      (experience) => {
        if (experience.id === changedExperience.id) {
          return { ...experience, isVisible: newVisibility };
        }
        return experience;
      }
    );
    setExperienceDetails({
      ...experienceDetails,
      experiences: newExperiencesArray,
    });
  }
  function editExperience(experience) {
    let newCurrent = { ...experience };
    setExperienceDetails({
      ...experienceDetails,
      isFormOpen: true,
      currentExperienceBeingFilled: newCurrent,
    });
    return;
  }
  return (
    <div className="rendered-experiences">
      {experienceDetails.experiences.map((experience) => {
        return (
          <Fragment key={experience.id}>
            <div className="experience">
              <h3
                onClick={() => {
                  editExperience(experience);
                }}
              >
                {experience.company === "" ? "Nil" : experience.company}
              </h3>
              <img
                src={`./public/${
                  experience.isVisible ? "eye-icon.svg" : "slashed-eye-icon.svg"
                }`}
                width="25px"
                alt="not show,experience-name on resume"
                onClick={() => {
                  changeVisibility(experience);
                }}
              />
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
function AddExperienceButton({ experienceDetails, setExperienceDetails }) {
  function showForm() {
    setExperienceDetails({ ...experienceDetails, isFormOpen: true });
  }
  return (
    <div className="add-experience">
      <button id="add-experience" onClick={showForm}>
        +Add Experience
      </button>
    </div>
  );
}
function resolveId(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].id = `${i}`;
  }
}
