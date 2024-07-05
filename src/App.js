import React from "react";
import "./app.scss";
import "animate.css";

const App = () => {
  return (
    <div>
      <div id="header" className="animate__animated animate__fadeInDown">
        <div className="menu">
          <div className="logo">LOGO</div>
          <div className="menuContent">
            <ul>
              <li>Trang Chủ</li>
              <li>Dịch Vụ Của Chúng Tôi</li>
              <li>Dự Án Của Chúng Tôi</li>
              <li>Liên Hệ</li>
            </ul>
          </div>
          <div className="email">
            <a href="mailto:luisHuynh@gmail.com">
              <i class="fa-solid fa-envelope"></i> luisHuynh@gmail.com
            </a>
          </div>
        </div>
        <div className="animateMenuIconWrap">
          <div className="animateMenuIcon .animate__animated .animate__shakeX"></div>
          <div className="menuBar">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
      <div id="banner">
        <div className="leftBanner">
          <h1 className="mainTitle animate__animated animate__fadeInLeft">
            HÃY ĐẾN VỚI CHÚNG TÔI
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            molestiae sunt ea ipsum exercitationem eligendi iste fuga laboriosam
            alias at perferendis animi atque voluptatum dignissimos iure, fugiat
            itaque delectus iusto doloremque! Expedita iure quo voluptatem
            mollitia animi quidem autem, maxime, totam dolor earum praesentium
          </p>
          <button className="animate__animated animate__fadeInUp">
            BẮT ĐẦU
          </button>
        </div>
        <div className="bannerImg animate__animated animate__fadeInUp">
          <img src="img/bannerImg.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default App;
