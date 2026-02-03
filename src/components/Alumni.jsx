import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import "../ui/Alumni.css";
import {alumniData} from "../data/alumni.js";




const Alumni = () => {
   return (
    <section className="alumni-section">
         <h1 className="alumni-title">
      Voices From Our Community
      </h1>

      <Splide
        options={{
          type: "loop",
          drag: "free",
          arrows: false,
          pagination: false,
          gap: "2rem",
          autoWidth: true,
          focus: "center",
          autoScroll: {
            speed: 0.7,
            pauseOnHover: false,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {alumniData.map((item, index) => (
          <SplideSlide key={index}>
            <div
              className={`alumni-card ${item.theme}`}
              style={{
                transform: `rotate(${index % 2 === 0 ? "-2deg" : "1deg"})`,
              }}
            >
              <p className="quote">“{item.quote}”</p>
              <h4>{item.name}</h4>
              <span>{item.role}</span>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
  };
  
  export default Alumni;
  