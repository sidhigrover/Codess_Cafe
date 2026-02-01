import "../ui/OurProgram.css";

import {programData} from  "../data/program.js";
import { projectsData } from "../data/program.js";

const OurProgram = () => {
  return (

        
    <div className="our-program">
      {/* Heading */}
      <h2 className="program-title">Our Program</h2>

      {/* Description */}
      <p className="program-description">
        Codess bridges the gender gap in tech by empowering women engineers with
        useful skills and connecting them to top companies. We make sure our
        talent is ready not just for a job, but for a long-term career.
      </p>

      {/* How We Prepare Section */}
      <h3 className="prepare-title" >How We Prepare Women Engineers For Industry</h3>

      <div className="prepare-grid">
        {programData.map((item) => (
          <div className="prepare-card" key={item.id}>
            <div className="meethi">
              <img src={item.img} alt={item.alt} />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>


      {/* ===================== */}
      {/* OUR PROJECTS SECTION */}
      {/* ===================== */}

       <h2 className="project-title">Our Projects</h2>


  

      <div className="projects-grid">
        {projectsData.map((item, index) => (
          <div className="projects-card" key={index} data-aos="fade-up">
           <div className="meethi">
              <img src={item.img} alt={item.alt} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.lead}</p>
          </div>
        ))}
      </div>

      


</div>
   
  );
};

export default OurProgram;
