import React from "react";
import "./style.css";

const Categories = () => {
  return (
    <div className="categories">
      <section class="todo-cmp">
        <ul class="todo-cmp__list">
          <li>
            <label for="todo-01">
              <input id="todo-01" type="checkbox" />
              <span>Open template</span>
            </label>
          </li>
          <li>
            <label for="todo-02">
              <input id="todo-02" type="checkbox" />
              <span>Build a to-do list</span>
            </label>
          </li>
          <li>
            <label for="todo-03">
              <input id="todo-03" type="checkbox" />
              <span>Write something</span>
            </label>
          </li>
          <li>
            <label for="todo-04">
              <input id="todo-04" type="checkbox" />
              <span>Complete the task</span>
            </label>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Categories;
