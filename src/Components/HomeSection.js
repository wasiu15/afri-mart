import React from "react";

const HomeSection = () => {
  return (
    <div>
      {/* HOME SECTION STARTS */}
      {homeSection()}
      {/* HOME SECTION ENDS */}

      {/* BANNER SECTION STARTS */}
      {bannerSection()}
      {/* BANNER SECTION ENDS */}
    </div>
  );
};

function homeSection() {
  return (
    <section className="home" id="home">
      <div className="image">
        <img src="images/home-img.png" />
      </div>

      <div className="content">
        <span>fresh and organic</span>
        <h3>your daily need products</h3>
        <a href="#" className="btn">
          get started
        </a>
      </div>
    </section>
  );
}

function bannerSection() {
  return (
    <section className="banner-container">
      {Banner("images/banner-1.jpg", "Special", "45%")}
      {Banner("images/banner-2.jpg", "Limited", "45%")}
    </section>
  );
}
function Banner(imageSource, header, percent) {
  return (
    <div className="banner">
      <img src={imageSource} />
      <div className="content">
        <h3>{header} offer</h3>
        <p>upto {percent} off</p>
        <a href="#" className="btn">
          check out
        </a>
      </div>
    </div>
  );
}

export default HomeSection;
