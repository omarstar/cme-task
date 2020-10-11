import React from "react";
import { createStore } from "redux";
import Counter from "../../components/page-two/Counter";
import counterTypes from "./redux-resources";

const initialState = { count: 0 };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case counterTypes.ADD_ONE:
      return { count: state.count + 1 };
    case counterTypes.MINUS_ONE:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
let store = createStore(rootReducer);

class PageTwo extends React.Component {
  constructor() {
    super();
    store.subscribe(() => {
      console.log(store.getState().count);
    });
  }

  getCount = () => {
    store.subscribe(() => {
      return store.getState().count;
    });
  };

  increment() {
    console.log("incremented");
    store.dispatch({
      type: counterTypes.ADD_ONE,
    });
  }
  decrement() {
    console.log("decremented");
    store.dispatch({
      type: counterTypes.MINUS_ONE,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Counter />
        </div>
      </div>
    );
  }
}

export default PageTwo;
