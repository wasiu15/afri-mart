import React, { Fragment } from "react";

const Deal = () => {
  return (
    <section className="deal" id="deal">
      {Countdown()}
    </section>
  );
};

function Countdown() {
  return (
    <div className="content">
      <h3 className="title">deal of the day</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam possimus
        voluptates commodi laudantium! Doloribus sint voluptatibus quaerat sequi
        suscipit nulla?
      </p>
      <div className="count-down">
        {Counter("day")}
        {Counter("hour")}
        {Counter("minute")}
        {Counter("second")}
      </div>
      <a href="#" className="btn">
        check the deal
      </a>
    </div>
  );
}

function Counter(name) {
  return (
    <div className="box">
      <h3 id={name}>00</h3>
      <span>{name}</span>
    </div>
  );
}
export default Deal;
