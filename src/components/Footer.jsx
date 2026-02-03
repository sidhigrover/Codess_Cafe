import "../ui/Footer.css";
import logo from "../assets/logo.gif"

const Footer=() =>{
return (
<footer className="footer">
  {/* SVG Title */}
  <div className="footer-title">
    <img src={logo} alt="Footer Title" />
  </div>

  {/* Subtitle */}
  <p className="footer-subtitle">
  <span>Get In Touch With Us</span>
</p>

  {/* Contact Button */}
   <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSfCnNgK1AIyApA_n7k_QI4FbDHIx1gTpXnmAmHr7DzJvbBUaA/viewform"
    target="_blank"
    rel="noopener noreferrer"
  >
  <button
    className="footer-btn"
    onClick={() => setShowForm(true)}
  >
    Contact Us
  </button>

  </a>

<div className="footer-icons">
  <a
    href="https://www.linkedin.com/company/codesscafe/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-linkedin-in"></i>
  </a>

  <a
    href="https://x.com/CodessCafe/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-twitter"></i>
  </a>

 <a href="mailto:aarnavjindal1000@gmail.com">
  <i className="fa fa-envelope envelope social_icons"></i>
</a>

  <a
    href="https://www.youtube.com/channel/UC91cziHilAn3tsk30wxbHvA"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-youtube"></i>
  </a>

  <a
    href="https://medium.com/codess-cafe"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-medium"></i>
  </a>
</div>

<div className="rights">© 2026 Codess.Cafe, All Right Reserved</div>

</footer>


);
}


export default Footer;