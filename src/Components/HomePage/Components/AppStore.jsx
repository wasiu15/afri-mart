import React from "react";

const AppStore = () => {
  return (
    <div>
      {/* <!--===== APP =======--> */}
      <section className="app section bd-container">
        <div className="app__container bd-grid">
          <div className="app__data">
            <span className="section-subtitle app__initial">App</span>
            <h2 className="section-title app__initial">App is aviable</h2>
            <p className="app__description">
              Find our application and download it, you can make reservations,
              food orders, see your deliveries on the way and much more.
            </p>
            <div className="app__stores">
              <a href="#">
                <img src="assets/img/app1.png" alt="" className="app__store" />
              </a>
              <a href="#">
                <img src="assets/img/app2.png" alt="" className="app__store" />
              </a>
            </div>
          </div>

          <img src="assets/img/movil-app.png" alt="" className="app__img" />
        </div>
      </section>
    </div>
  );
};

export default AppStore;
