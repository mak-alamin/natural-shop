import React from "react";

const QA = () => {
  return (
    <div className="accordion accordion-flush" id="ques_1">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading-1">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapse-1"
          >
            How React Works?
          </button>
        </h2>
        <div
          id="flush-collapse-1"
          className="accordion-collapse collapse"
          data-bs-parent="#ques_2"
        >
          <div className="accordion-body">
            React works by creating a Virtual DOM behind the scene that is
            basically a DOM tree representation in JavaScript. So when it needs
            to read or write to the DOM, it will use the virtual representation
            of it. Then the virtual DOM will try to find the most efficient way
            to update the browser’s DOM. React elements are plain objects and
            are cheap to create and React DOM takes care of updating the DOM to
            match the React elements. That's why it's very efficient and have
            high performance to speed up DOM manipulation.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading-2">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapse-2"
          >
            What is the difference beetween state vs props?
          </button>
        </h2>
        <div
          id="flush-collapse-2"
          className="accordion-collapse collapse"
          data-bs-parent="#ques_2"
        >
          <div className="accordion-body">
            In React we use props to pass data from one component to another.
            States are used to store data locally that is local only in the
            component in which it is declared and cannot be passed to other
            components without props.
          </div>
        </div>
      </div>
    </div>
  );
};

export default QA;
