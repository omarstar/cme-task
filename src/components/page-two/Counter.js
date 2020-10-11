import React from "react";

const Counter = () => {
  return (
    <div className="col-10 mx-auto d-flex justify-content-center">
      <span className="btn btn-black mx-1" onClick={() => "minus clicked"}>
        -
      </span>
      <span className="btn btn-black mx-1">"display"</span>
      <span className="btn btn-black mx-1" onClick={() => "plus clicked"}>
        +
      </span>
    </div>
  );
};

export default Counter;
