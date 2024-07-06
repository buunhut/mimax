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
          <div className="logo">LOGO</div>
          <div className="menuContent">
            <ul>
              <li>
                <a href="#banner">Trang Chủ</a>
              </li>
              <li>
                <a href="#services">Dịch Vụ Của Chúng Tôi</a>
              </li>
              <li>
                <a href="#projects">Dự Án Của Chúng Tôi</a>
              </li>

              <li>
                <a href="#contact">Liên Hệ</a>
              </li>
            </ul>
          </div>
          <div className="email">
            <a href="mailto:luisHuynh@gmail.com">
              <i class="fa-solid fa-envelope"></i> luisHuynh@gmail.com
            </a>
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
          <TypingEffect text="HÃY ĐẾN VỚI CHÚNG TÔI" speed={100} />
          <p className="animate__animated animate__fadeInRight">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            molestiae sunt ea ipsum exercitationem eligendi iste fuga laboriosam
            alias at perferendis animi atque voluptatum dignissimos iure, fugiat
            itaque delectus iusto doloremque! Expedita iure quo voluptatem
            mollitia animi quidem autem, maxime, totam dolor earum praesentium
          </p>
          <SliderBar />
          <button className="animate__animated animate__fadeInUp animate__delay-1s">
            BẮT ĐẦU
          </button>
        </div>
        <div className="bannerImg animate__animated animate__fadeInUp">
          <img src="img/bannerImg.jpeg" alt="" />
        </div>
      </div>
      <div id="services">
        <div className="serviceItem animate__animated animate__fadeInDown">
          <img src="/img/thinking.png" alt="" />
          <h4>Service 1</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            assumenda illum at sint ut expedita cupiditate laborum quasi iste
            consequatur.
          </p>
        </div>
        <div className="serviceItem animate__animated animate__fadeInUp">
          <img src="/img/optimum.png" alt="" />
          <h4>Service 1</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            assumenda illum at sint ut expedita cupiditate laborum quasi iste
            consequatur.
          </p>
        </div>
        <div className="serviceItem animate__animated animate__fadeInDown">
          <img src="/img/execution.png" alt="" />
          <h4>Service 1</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            assumenda illum at sint ut expedita cupiditate laborum quasi iste
            consequatur.
          </p>
        </div>
        <div className="serviceItem animate__animated animate__fadeInUp">
          <img src="/img/branding.png" alt="" />
          <h4>Service 1</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            assumenda illum at sint ut expedita cupiditate laborum quasi iste
            consequatur.
          </p>
        </div>
      </div>
      <div id="projects">
        <div className="projectContent">
          <div className="leftProject">
            <h1>Projects demo của chúng tôi</h1>
            <h1>Projects Demo</h1>
            <SliderBar />
          </div>
          <div className="rightProject ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              molestias sit atque aut accusantium obcaecati, velit cupiditate?
              Voluptates magni ea assumenda, sunt animi porro corrupti eum nisi
              exercitationem libero dicta aut quibusdam consectetur explicabo
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
                  <span>01 - </span>Lorem ipsum dolor sit amet
                </p>
                <i className="fa-solid fa-angles-right"></i>
              </li>
              <li>
                <p>
                  <span>02 - </span>Lorem ipsum dolor sit amet
                </p>
                <i className="fa-solid fa-angles-right"></i>
              </li>
              <li>
                <p>
                  <span>03 - </span>Lorem ipsum dolor sit amet
                </p>
                <i className="fa-solid fa-angles-right"></i>
              </li>
              <li>
                <p>
                  <span>04 - </span>Lorem ipsum dolor sit amet
                </p>
                <i className="fa-solid fa-angles-right"></i>
              </li>
              <li>
                <p>
                  <span>05 - </span>Lorem ipsum dolor sit amet
                </p>
                <i className="fa-solid fa-angles-right"></i>
              </li>
              <li>
                <p>
                  <span>06 - </span>Lorem ipsum dolor sit amet
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
              <h1>LOGO</h1>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, ipsam. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, ipsam. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, ipsam.
            </p>
            <div>
              <a href="tel:+909240886">
                <i className="fa-solid fa-phone"></i> 0909240886
              </a>
            </div>
            <div>
              <a href="mailto:nhut.nta@gmail.com">
                <i className="fa-solid fa-envelope"></i> nhut.nta@gmail.com
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
            LOGO NAME
          </div>
        </div>
        <div className="footer">
          <h3>2024 MIMAX SOFTWARE GROUP, LLC</h3>
          <ul>
            <li>
              <a href="#banner">Trang Chủ</a>
            </li>
            <li>
              <a href="#services">Dịch Vụ Của Chúng Tôi</a>
            </li>
            <li>
              <a href="#projects">Dự Án Của Chúng Tôi</a>
            </li>

            <li>
              <a href="#contact">Liên Hệ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
