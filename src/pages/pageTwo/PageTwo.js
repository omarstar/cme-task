import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Counter from "../../components/page-two/Counter";
import counterReducer from "./counterReducer";
import "./pg2-style.css";

const store = createStore(counterReducer);
const PageTwo = () => {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <div className="row mt-5">
          <Counter />
        </div>
      </div>
    </Provider>
  );
};

export default PageTwo;
