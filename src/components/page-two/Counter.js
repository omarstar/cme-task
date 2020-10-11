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
      <div className="col-10 mx-auto d-flex justify-content-center align-items-center">
        <button type="button" class="btn btn-info mx-3" onClick={decrement}>
          <span>-</span>
        </button>

        <div id="outer-circle">
          <span
            className={this.props.count === 0 ? "text-danger" : "text-info"}
            id="inner-circle"
          >
            {this.props.count}
          </span>
        </div>

        <button type="button" class="btn btn-info mx-3" onClick={increment}>
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
