import "./about-me.css";
import { ContactUs } from "./contact-form/contact";
import myPhoto from "./my-photo.jpg";

const AboutMe = () => {
  return (
    <div className="aboutMePageContainer">
      <section className="aboutMe">
        <img src={myPhoto} alt="" className="myPhoto" />

        <p>
          Hello! My name is <b>Khant Min Thukha</b> and I am an amateur Burmese
          developer. My goal is to become a professional developer. This project
          is one of my steps toward my goal. Thanks for visiting this small
          website.
        </p>
      </section>
      <section className="contactWithIcon">
        <h3>Contact Me</h3>
        <section className="contactButtonContainer">
          <a href="tel:+959966304835">
            <i className="fa-solid fa-phone"></i>
          </a>
          <a href="https://www.facebook.com/sai.khantkha" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://github.com/KhantMinTuKha" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/thu-kha-b0b0ab238/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:km5555tk@gmail.com" target="_blank">
            <i className="fa-solid fa-at"></i>
          </a>
        </section>
        <div className="or">(or)</div>
        <section>
          <ContactUs />
        </section>
      </section>
    </div>
  );
};

export default AboutMe;
