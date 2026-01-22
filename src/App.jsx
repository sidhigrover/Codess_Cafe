import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ForRecruiters from "./components/ForRecruiters";
import OurProgram from "./components/OurProgram";
import Achievements from "./components/Achievements";
import Alumni from "./components/Alumni";
import Preloader from "./components/Preloader";


function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!load && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "auto" });
      }
    }
  }, [load]);
  return (
    <>
      {/* Loader */}
      {load && <Preloader />}

      {/* Main Content */}
      {!load && (
        <>
          {/* Navbar */}
          <Navbar />

          <section id="home">
            <Home />
           </section>


          <section id="for-recruiters">
            <ForRecruiters />
          </section>

          <section id="our-program">
            <OurProgram />
          </section>

          <section id="achievements">
            <Achievements />
          </section>

          <section id="alumni">
            <Alumni />
          </section>

        </>
      )}
    </>
  );
}

export default App;
