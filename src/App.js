import React, { useEffect, useRef, useState } from "react";
import "./app.scss";
import "animate.css";
import SliderBar from "./componets/SliderBar";
import TypingEffect from "./componets/TypingEffect";

const App = () => {
  const targetRef = useRef(null);
  const refAbout = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isAbout, setIsAbout] = useState(false);

  useEffect(() => {
    //lăn chuột
    const handleScroll = () => {
      const targetPosition = targetRef.current.getBoundingClientRect().top;
      const targetPositionAbout = refAbout.current.getBoundingClientRect().top;
      const screenPosition = window.innerHeight - 300; // Điều kiện có thể thay đổi tại đây

      if (targetPosition < screenPosition) {
        setIsVisible(true);
      } else if (targetPosition >= screenPosition + 300) {
        setIsVisible(false);
      }
      if (targetPositionAbout <= window.innerHeight / 2 - 200) {
        setIsAbout(true);
      } else {
        setIsAbout(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="header" className="animate__animated animate__fadeInDown">
        <div className="menu">
          <div className="logo">
            <img src="/img/logoAcg.png" alt="" />
          </div>
          <div className="menuContent">
            <ul>
              <li>
                <a href="#banner">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="phone">
              <a href="tel:+090679049">
                <i class="fa-solid fa-phone"></i> +84 909 679 049
              </a>
            </div>
            <div className="email">
              <a href="mailto:acggroupcapital@gmail.com">
                <i class="fa-solid fa-envelope"></i> acggroupcapital@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="animateMenuIconWrap">
          <div className="animateMenuIcon animate__animated animate__shakeX"></div>
          <div className="menuBar">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
      <div id="banner">
        <div className="leftBanner">
          <TypingEffect text="WELCOME TO US" speed={100} />
          <p className="animate__animated animate__fadeInRight">
            Our mission is to provide digital projects with the tools,
            strategies and support they need to thrive in today's dynamic
            business environment.
          </p>
          <SliderBar />
          <button className="animate__animated animate__fadeInUp animate__delay-1s">
            Start
          </button>
        </div>
        <div className="bannerImg animate__animated animate__fadeInUp">
          <img src="img/bannerAcg.jpeg" alt="" />
        </div>
      </div>
      <div id="services">
        <div className="serviceItem animate__animated animate__fadeInDown">
          <img src="/img/thinking.png" alt="" />
          <h4>Analyze</h4>
          <p>
            Analysis is a wonderful cognitive process that guides our
            understanding of a project.
          </p>
        </div>
        <div className="serviceItem animate__animated animate__fadeInUp">
          <img src="/img/optimum.png" alt="" />
          <h4>Design</h4>
          <p>
            Achieving Design requires a careful balance of various factors and
            considerations.
          </p>
        </div>
        <div className="serviceItem animate__animated animate__fadeInDown">
          <img src="/img/execution.png" alt="" />
          <h4>Implementation</h4>
          <p>
            The implementation of ideas and plans in a project, execution is the
            bridge that leads the vision into reality.
          </p>
        </div>
        <div className="serviceItem animate__animated animate__fadeInUp">
          <img src="/img/branding.png" alt="" />
          <h4>Branding</h4>
          <p>
            We strive for excellence, innovation and continuous customer
            satisfaction.
          </p>
        </div>
      </div>
      <div id="projects">
        <div className="projectContent">
          <div className="leftProject">
            <h1>Our Creative Services</h1>
            {/* <h1>Projects Demo</h1> */}
            <SliderBar />
          </div>
          <div className="rightProject ">
            <p>
              We — universal place For wide spectrum creative services, which
              will embody yours ideas V life And will allocate your brand.
            </p>
          </div>
        </div>
        <div className="projectContent">
          <div
            ref={targetRef}
            className={
              isVisible
                ? "leftProject animate__animated animate__fadeInLeft"
                : "leftProject"
            }
          >
            <img src="img/project.png" alt="" />
          </div>
          <div
            className={
              isVisible
                ? "rightProject animate__animated animate__fadeInRight"
                : "rightProject"
            }
          >
            <ul>
              <li>
                <p>
                  <span>01 - </span>Brand design
                </p>
                <i className="fa-solid fa-angles-right"></i>
              </li>
              <li>
                <p>
                  <span>02 - </span>Digital Marketing
                </p>
                <i className="fa-solid fa-angles-right"></i>
              </li>
              <li>
                <p>
                  <span>03 - </span>Software development
                </p>
                <i className="fa-solid fa-angles-right"></i>
              </li>
              <li>
                <p>
                  <span>04 - </span>UI/UX design
                </p>
                <i className="fa-solid fa-angles-right"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="agency"></div>
      <div id="about" ref={refAbout}>
        <div className="aboutContent">
          <div
            className={
              isAbout
                ? "aboutItem animate__animated animate__zoomIn"
                : "aboutItem"
            }
          >
            <img src="/img/about1.png" alt="" />
            <div className="overlay">Lorem ipsum dolor sit.</div>
          </div>
          <div
            className={
              isAbout
                ? "aboutItem animate__animated animate__zoomIn"
                : "aboutItem"
            }
          >
            {" "}
            <img src="/img/about2.png" alt="" />
            <div className="overlay">orem ipsum dolor sit.</div>
          </div>
          <div
            className={
              isAbout
                ? "aboutItem animate__animated animate__zoomIn"
                : "aboutItem"
            }
          >
            {" "}
            <img src="/img/about3.png" alt="" />
            <div className="overlay">orem ipsum dolor sit.</div>
          </div>
          <div
            className={
              isAbout
                ? "aboutItem animate__animated animate__zoomIn"
                : "aboutItem"
            }
          >
            {" "}
            <img src="/img/about4.png" alt="" />
            <div className="overlay">orem ipsum dolor sit.</div>
          </div>
          <div
            className={
              isAbout
                ? "aboutItem animate__animated animate__zoomIn"
                : "aboutItem"
            }
          >
            {" "}
            <img src="/img/about1.png" alt="" />
            <div className="overlay">orem ipsum dolor sit.</div>
          </div>
          <div
            className={
              isAbout
                ? "aboutItem animate__animated animate__zoomIn"
                : "aboutItem"
            }
          >
            {" "}
            <img src="/img/about2.png" alt="" />
            <div className="overlay">orem ipsum dolor sit.</div>
          </div>
          <div
            className={
              isAbout
                ? "aboutItem animate__animated animate__zoomIn"
                : "aboutItem"
            }
          >
            {" "}
            <img src="/img/about3.png" alt="" />
            <div className="overlay">orem ipsum dolor sit.</div>
          </div>
          <div
            className={
              isAbout
                ? "aboutItem animate__animated animate__zoomIn"
                : "aboutItem"
            }
          >
            {" "}
            <img src="/img/about4.png" alt="" />
            <div className="overlay">orem ipsum dolor sit.</div>
          </div>
          <div
            className={
              isAbout
                ? "aboutItem animate__animated animate__zoomIn"
                : "aboutItem"
            }
          >
            {" "}
            <img src="/img/about1.png" alt="" />
            <div className="overlay">orem ipsum dolor sit.</div>
          </div>
          <div
            className={
              isAbout
                ? "aboutItem animate__animated animate__zoomIn"
                : "aboutItem"
            }
          >
            {" "}
            <img src="/img/about2.png" alt="" />
            <div className="overlay">orem ipsum dolor sit.</div>
          </div>
          <div
            className={
              isAbout
                ? "aboutItem animate__animated animate__zoomIn"
                : "aboutItem"
            }
          >
            {" "}
            <img src="/img/about3.png" alt="" />
            <div className="overlay">orem ipsum dolor sit.</div>
          </div>
          <div
            className={
              isAbout
                ? "aboutItem animate__animated animate__zoomIn"
                : "aboutItem"
            }
          >
            {" "}
            <img src="/img/about4.png" alt="" />
            <div className="overlay">orem ipsum dolor sit.</div>
          </div>
        </div>
      </div>
      <div id="contact">
        <div className="contactContent">
          <div className="info">
            <div className="logo">
              <img src="/img/logoAcg.png" alt="" />
            </div>
            <p>
              <i className="fa-solid fa-location-dot"></i> 34A Pham Ngoc Thach
              St, District 1, Ho Chi Minh City, Vietnam
            </p>
            <div>
              <a href="tel:+090679049">
                <i class="fa-solid fa-phone"></i> +84 909 679 049
              </a>
            </div>
            <div>
              <a href="mailto:acggroupcapital@gmail.com">
                <i class="fa-solid fa-envelope"></i> acggroupcapital@gmail.com
              </a>
            </div>
          </div>
          <div className="contactIcon">
            <div className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
          <div className="bigLogo animate__animated animate__swing animate__infinite	">
            ACG Group
          </div>
        </div>
        <div className="footer">
          <h3>2024 ACG GROUP - Copyright</h3>
          <ul>
            <li>
              <a href="#banner">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <p>Code by Zero - 0909240886</p>
      </div>
    </div>
  );
};

export default App;
