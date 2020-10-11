import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increment, decrement } from "../../pages/pageTwo/redux-actions";

class Counter extends Component {
  static mapStateToProps = (state) => {
    return {
      count: state.count,
    };
  };

  static mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
      {
        increment,
        decrement,
      },
      dispatch
    );
  };

  render() {
    const { increment, decrement } = this.props;
    return (
      <div className="col-10 mx-auto d-flex justify-content-center">
        <button type="button" class="btn btn-info mx-1" onClick={decrement}>
          <span>-</span>
        </button>
        <span className="btn btn-black mx-1">{this.props.count}</span>
        <button type="button" class="btn btn-info mx-1" onClick={increment}>
          <span>+</span>
        </button>
      </div>
    );
  }
}

export default connect(
  Counter.mapStateToProps,
  Counter.mapDispatchToProps
)(Counter);
