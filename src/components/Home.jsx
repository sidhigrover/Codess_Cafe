import "../ui/Home.css";
import rubrik from "../assets/rubrik.png";
import intuit from "../assets/Intuit-Logo.png";
import ll from "../assets/ll.png";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Hire Job-Ready <br />
          <span>Women Engineers</span>
        </h1>

        <p>
          Industry-trained women talent with strong fundamentals,
          clear communication, and real project experience.
        </p>

       <div className="hero-buttons">
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSfCnNgK1AIyApA_n7k_QI4FbDHIx1gTpXnmAmHr7DzJvbBUaA/viewform"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="btn primary">Hire Talent</button>
  </a>
</div>

        <div className="trusted">
          <p>Trusted by Industry Mentors & Partner Companies</p>
          <div className="logos">
  <img src="https://img.icons8.com/color/96/microsoft.png" alt="microsoft" />
  <img src="https://img.icons8.com/color/96/amazon.png" alt="amazon" />
  <img src={intuit} alt="Intuit" />
  <img src={rubrik} alt="Rubrik" />
</div>

        </div>
      </div>
  
 <div className="hero-animation">
    <img src={ll} alt="Animated illustration" />
  </div>

 

    </section>
  );
};

export default Home;
