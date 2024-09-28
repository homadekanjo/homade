export default function Resume({
  scrolledTo,
  ToScrollAnimation = "ShowResume 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards",
}) {
  const stylerScrolledTo = {
    animation: scrolledTo ? ToScrollAnimation : "",
  };
  return (
    <section className="my_resume" id="resume">
      <header className="resume_header" style={stylerScrolledTo}>
        <h3>Resume</h3>
        <p>Here are my experiences and qualifications:</p>
      </header>
      {/* experience -----------------------------------*/}
      <div className="experience_educaion_container">
        <div className="experience" style={stylerScrolledTo}>
          <h4 className="experience_title">Experience</h4>
          <div className="experience_details">
            <div className="stripe">
              <div className="stripe_circle"></div>
              <div className="stripe_circle"></div>
            </div>
            <h4 className="experience_details_title">Experience Title</h4>
            <h5 className="experience_place">Comapny Name</h5>
            <h5 className="experience_date">since 2023 Jan</h5>
            <p className="experience_description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad at
              odio accusantium aliquid dolore provident.
            </p>
          </div>
        </div>
        {/* qualifications -----------------------------------*/}
        <div className="experience" style={stylerScrolledTo}>
          <h4 className="experience_title study">Education</h4>
          <div className="experience_details">
            <div className="stripe">
              <div className="stripe_circle"></div>
              <div className="stripe_circle"></div>
            </div>
            <h4 className="experience_details_title">Experience Title</h4>
            <h5 className="experience_place">College Name</h5>
            <h5 className="experience_date">since 2023 Jan</h5>
            <p className="experience_description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad at
              odio accusantium aliquid dolore provident.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
