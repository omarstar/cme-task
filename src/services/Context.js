import React from "react";
import { bone } from "./DBone";

const CX = React.createContext();

class CProvider extends React.Component {
  state = {
    contentBone: bone,
  };

  render() {
    return (
      <CX.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </CX.Provider>
    );
  }
}

const CCustomer = CX.Consumer;

export { CProvider, CCustomer };
