import { Fragment } from "react";

export function Resume(props) {
  return (
    <>
      <Header {...props} />
      <MainResumeBody {...props} />
    </>
  );
}

function Header({ personalDetails }) {
  return (
    <div className="resume-header">
      <h1>{personalDetails.fullName + "fuck"}</h1>
      <div>
        <div>
          <img src="/mail-icon.svg" width="25px" alt="" />
          <p>{personalDetails.email}</p>
        </div>
        <div>
          <img src="/phone-icon.svg" width="25px" alt="" />
          <p>{personalDetails.phoneNumber}</p>
        </div>
        <div>
          <img src="/location-icon.svg" width="25px" alt="" />
          <p>{personalDetails.address}</p>
        </div>
      </div>
    </div>
  );
}
function MainResumeBody(props) {
  return (
    <div className="resume-main">
      <ResumeEducation {...props} />
      <ResumeExperience {...props} />
    </div>
  );
}
function ResumeEducation({ educationDetails }) {
  return (
    <div className="resume-education">
      <h2>Education</h2>
      {educationDetails.educations
        .filter((education) => education.isVisible)
        .map((education) => {
          return (
            <Fragment key={education.id}>
              <div className="resume-education-point">
                <p>{`${education.startDate} - ${education.endDate}`}</p>
                <p>{education.school}</p>
                <p>{education.location}</p>
                <p>{education.degree}</p>
              </div>
            </Fragment>
          );
        })}
    </div>
  );
}
function ResumeExperience({ experienceDetails }) {
  return (
    <div className="resume-experience">
      <h2>Experience</h2>
      {experienceDetails.experiences
        .filter((experience) => experience.isVisible)
        .map((experience) => {
          return (
            <Fragment key={experience.id}>
              <div className="resume-experience-point">
                <p>{`${experience.startDate} - ${experience.endDate}`}</p>
                <p>{experience.company}</p>
                <p>{experience.location}</p>
                <p>{experience.position}</p>
                <p>{experience.description}</p>
              </div>
            </Fragment>
          );
        })}
    </div>
  );
}
