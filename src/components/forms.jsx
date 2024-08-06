export function PersonalDetailsForm() {
  return (
    <div className="personal-details-form">
      <h2>Personal Details</h2>
      <label htmlFor="full-name">Full Name</label>
      <input type="text" id="full-name" placeholder="eg.John Smith" />
      <label htmlFor="phone-number">Phone Number</label>
      <input type="text" id="phone-number" placeholder="eg. +98057 98374" />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" placeholder="john20242gmail.com" />
      <label htmlFor="address">Address</label>
      <input type="text" id="address" placeholder="London, UK" />
    </div>
  );
}

// Education Section
export function EducationSection() {
  return (
    <div className="education-section">
      <h2>Education</h2>
      <EducationForm />
      <Educations />
      <AddEducationButton />
    </div>
  );
}
function EducationForm() {
  return (
    <div className="education-form">
      <label htmlFor="school">School</label>
      <input type="text" id="school" placeholder="School" />
      <label htmlFor="degree">Degree/Specialization</label>
      <input type="text" id="degree" placeholder="Degree" />
      <div className="education-dates">
        <div>
          <label htmlFor="education-start-date">Start Date</label>
          <input
            type="text"
            id="education-start-date"
            placeholder="eg.19/09/2024"
          />
        </div>
        <div>
          <label htmlFor="education-end-date">End Date</label>
          <input
            type="text"
            id="education-end-date"
            placeholder="eg.20/09/2024"
          />
        </div>
      </div>
      <label htmlFor="education-location">Location</label>
      <input type="text" id="education-location" placeholder="London, UK" />
      <div className="education-form-buttons">
        <button id="delete">Delete</button>
        <button id="add">Add</button>
        <button id="clear">Clear</button>
      </div>
    </div>
  );
}
function Educations() {
  return (
    <div className="rendered-educations">
      <div className="education">
        <h3>London School of Economics</h3>
        <img
          src="./src/assets/eye-icon.svg"
          width="25px"
          alt="not show,education-name on resume"
        />
      </div>
    </div>
  );
}
function AddEducationButton() {
  return (
    <div className="add-education">
      <button id="add-education">+Add Education</button>
    </div>
  );
}

// Experience Section
export function ExperienceSection() {
  return (
    <div className="experience-section">
      <h2>Experience</h2>
      <ExperienceForm />
      <Experiences />
      <AddExperienceButton />
    </div>
  );
}

function ExperienceForm() {
  return (
    <div className="experience-form">
      <label htmlFor="company">Company</label>
      <input type="text" id="company" placeholder="eg.Microsoft Inc." />
      <label htmlFor="position">Position</label>
      <input type="text" id="position" placeholder="eg.VP of sales" />
      <div className="experience-dates">
        <div>
          <label htmlFor="experience-start-date">Start Date</label>
          <input
            type="text"
            id="experience-start-date"
            placeholder="eg.08/07/2024"
          />
        </div>
        <div>
          <label htmlFor="experience-end-date">End Date</label>
          <input
            type="text"
            id="experience-end-date"
            placeholder="eg.09/10/2024"
          />
        </div>
      </div>
      <label htmlFor="location">Location</label>
      <input type="text" id="location" placeholder="eg.London, UK" />
      <label htmlFor="experience-description">Description</label>
      <textarea id="experience-description"></textarea>
      <div className="experience-form-buttons">
        <button id="delete">Delete</button>
        <button id="add">Add</button>
        <button id="clear">Clear</button>
      </div>
    </div>
  );
}
function Experiences() {
  return (
    <div className="rendered-experiences">
      <div className="experience">
        <h3>Microsoft Inc.</h3>
        <img
          src="./src/assets/eye-icon.svg"
          width="25px"
          alt="not show,experience-name on resume"
        />
      </div>
    </div>
  );
}
function AddExperienceButton() {
  return (
    <div className="add-experience">
      <button id="add-experience">+Add Experience</button>
    </div>
  );
}
