export function Resume() {
  return (
    <>
      <Header />
      <MainResumeBody />
    </>
  );
}

function Header() {
  return (
    <div className="resume-header">
      <h1>John Mueller</h1>
      <div>
        <div>
          <img src="./src/assets/mail-icon.svg" width="25px" alt="" />
          <p>john2024@gmail.com</p>
        </div>
        <div>
          <img src="./src/assets/phone-icon.svg" width="25px" alt="" />
          <p>+98392 92839</p>
        </div>
        <div>
          <img src="./src/assets/location-icon.svg" width="25px" alt="" />
          <p>London, UK</p>
        </div>
      </div>
    </div>
  );
}
function MainResumeBody() {
  return (
    <div className="resume-main">
      <ResumeEducation />
      <ResumeExperience />
    </div>
  );
}
function ResumeEducation() {
  return (
    <div className="resume-education">
      <h2>Education</h2>
      <div className="resume-education-point">
        <p>08/10/2024 - 09/11/2027</p>
        <p>Wharton University</p>
        <p>London, UK</p>
        <p>Bachelor of Economics</p>
      </div>
    </div>
  );
}
function ResumeExperience() {
  return (
    <div className="resume-experience">
      <h2>Experience</h2>
      <div className="resume-experience-point">
        <p>09/10/2027 - present</p>
        <p>Microsoft Inc.</p>
        <p>California, USA</p>
        <p>VP of sales</p>
        <p>
          I am currently working in microsoft in california , it was a great
          experience working there and i learned a lot , but since its a very
          big organization i feel that i am not seen
        </p>
      </div>
    </div>
  );
}
