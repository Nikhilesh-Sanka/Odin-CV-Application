export function ClearResume(props) {
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
