import React from "react";
import "../ui/OurProgram.css";

// Replace these with your actual SVG imports
import CodingIcon from "../assets/coding.svg";
import MockIcon from "../assets/mock.svg";
import ScholarshipIcon from "../assets/scholarship.svg";
import ProgressIcon from "../assets/progress.svg";

const OurProgram = () => {
  return (
    <section className="our-program">
      {/* Heading */}
      <h2 className="program-title">Our Program</h2>

      {/* Description */}
      <p className="program-description">
        Codess bridges the gender gap in tech by empowering women engineers with
        useful skills and connecting them to top companies. We make sure our
        talent is ready not just for a job, but for a long-term career.
      </p>

      {/* How We Prepare Section */}
      <h3 className="prepare-title">How We Prepare Women Engineers For Industry</h3>

      <div className="prepare-grid">
        <div className="prepare-card">
          <object type="image/svg+xml" data={CodingIcon} alt="Rigorous Coding Practice" />
          <p>Rigorous Coding Practice</p>
        </div>

        <div className="prepare-card">
          <object type="image/svg+xml" data={MockIcon} alt="Regular Mock Interviews" />
          <p>Regular Mock Interviews</p>
        </div>

        <div className="prepare-card">
          <object type="image/svg+xml" data={ScholarshipIcon} alt="Scholarship Prep Sessions" />
          <p>Scholarship Prep Sessions</p>
        </div>

        <div className="prepare-card">
          <object type="image/svg+xml" data={ProgressIcon} alt="Weekly Progress Tracking" />
          <p>Weekly Progress Tracking</p>
        </div>
      </div>
    </section>
  );
};

export default OurProgram;
