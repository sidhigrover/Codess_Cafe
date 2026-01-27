import { Component } from "react";
import "../ui/Navbar.css";
import codess from "../assets/codess.svg";
import tea from "../assets/tea.svg";

class Navbar extends Component {
  state = {
    clicked: false,
    activeLink: "home",
  };

  componentDidMount() {

    
    this.syncActiveLink();
    window.addEventListener("hashchange", this.syncActiveLink);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.syncActiveLink);
  }

  syncActiveLink = () => {
    const hash = window.location.hash;

    const hashToLinkMap = {
      "#home": "home",
      "#for-recruiters": "recruiters",
      "#our-program": "program",
      "#achievements": "achievements",
      "#alumni": "alumni",
    };

    this.setState({
      activeLink: hashToLinkMap[hash] || "home",
    });
  };

  handleClick = () => {
    this.setState((prev) => ({ clicked: !prev.clicked }));
  };

  setActive = (link) => {
    this.setState({
      activeLink: link,
      clicked: false,
    });
  };

  render() {
    const { clicked, activeLink } = this.state;

    return (
      <>
        <nav>
          {/* Logo */}
          <object type="image/svg+xml" data={codess} />
          

          {/* Decorative Tea SVG */}
          <object
            type="image/svg+xml"
            data={tea} 
            style={{
              position: "fixed",
              left: "-10px",
              top: "-50px",
            }}
          />

          {/* Navbar Links */}
          <ul id="navbar" className={clicked ? "active" : ""}>
            <li>
              <a
                href="#home"
                className={activeLink === "home" ? "active" : ""}
                onClick={() => this.setActive("home")}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#for-recruiters"
                className={activeLink === "recruiters" ? "active" : ""}
                onClick={() => this.setActive("recruiters")}
              >
                For Recruiters
              </a>
            </li>

            <li>
              <a
                href="#our-program"
                className={activeLink === "program" ? "active" : ""}
                onClick={() => this.setActive("program")}
              >
                Our Program
              </a>
            </li>

            <li>
              <a
                href="#achievements"
                className={activeLink === "achievements" ? "active" : ""}
                onClick={() => this.setActive("achievements")}
              >
                Achievements
              </a>
            </li>

            <li>
              <a
                href="#alumni"
                className={activeLink === "alumni" ? "active" : ""}
                onClick={() => this.setActive("alumni")}
              >
                Alumni
              </a>
            </li>

            <li>
              <a
                href="https://forms.gle/3aEPVe5RiQKn8dti6"
                target="_blank"
                rel="noreferrer"
                className="hire-talent-btn"
              >
                Hire Talent
              </a>
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
