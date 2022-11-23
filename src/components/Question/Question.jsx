import React from "react";
import "./Question.css";
const Question = () => {
  return (
    <div className="">
      <div className="question-container">
        <div className="q-1">
          <h3>How react work ?</h3>
          <p>
            React is a JavaScript library. In general, react use dom and
            ECMAScript in the backend. Mainly it's used to build User interface
            segment
          </p>
        </div>
        <div className="q-2">
          <h3>Difference between props and state?</h3>
          <p>
            Props one uses to send data from one place to another place and it's
            not changeable because props only carry data On the other hand state
            is changeable and it's run asynchronously
          </p>
        </div>
        <div className="q-3">
          <h3>how to use state ?</h3>
          <p>
            UseState encapsulate only singular value from the state, for
            multiple state need to have useState calls. Syntax: The first
            element is the initial state and the second one is a function that
            is used for updating the state. We can also pass a function as an
            argument if the initial state has to be computed
          </p>
        </div>
      </div>
      <footer>
        <p className="footer">
        &copy; All Right reserved by <b>Code Ninja</b>
        </p>
      </footer>
    </div>
  );
};

export default Question;
