import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../ui/ForRecruiters.css";
import features from "../api/features.json";
import pipeline from "../api/pipeline.json";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css/core";
import "../ui/OurProgram.css";
import {companies} from  "../data/companies.js";




const ForRecruiters = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false,
    });
  }, []);

  return (
    <>
        <div className="recruiter-section">
      {/* TOP SECTION */}
      <h1 className="main-title">
        A Hiring Solution Designed <br /> For Recruiters
      </h1>

      <h2 className="sub-title">What You Get with Codess Talent</h2>

      <div className="card-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index} data-aos="fade-up">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* PIPELINE SECTION */}
      <h2 className="pipeline-title">How Our Hiring Pipeline Works</h2>

      <div className="pipeline">
        {pipeline.map((item, index) => (
          <div
            className="pipeline-step"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="step-circle">{item.step}</div>

            <div className="step-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
     </div>

       <div className="auto-scroll-section">
      <h1 className="auto-title">
        Companies <br /> Where our Mentees <br/> <em>Placed</em>
      </h1>

      <Splide
        options={{
          type: "loop",
          drag: "free",
          arrows: false,
          pagination: false,
          gap: "1rem",
          autoWidth: true,
          autoScroll: {
            speed: 1,
            pauseOnHover: false,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {companies.map((company, index) => (
          <SplideSlide key={index}>
            <div className="company-oval">
              <img src={company.logo} alt={company.name} />
              <h3>{company.name}</h3>
            </div>
          </SplideSlide>
        ))}
      </Splide>

    </div>
  
    </>
  );
};

export default ForRecruiters;
