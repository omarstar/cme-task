import React from "react";
import { bone, objList } from "./DBone";

const CX = React.createContext();

class CProvider extends React.Component {
  state = {
    contentBone: bone,
    itemsA: objList,
  };

  getBone() {
    return "hello returned";
  }

  // testing
  /*
  tester = () => {
    console.log("state P ", this.state.products[0].inCart);
    console.log("store DB P", pro.storeProducts[0].inCart);

    const tempP = [...this.state.products];
    tempP[0].inCart = true;
    this.setState(
      () => {
        return { products: tempP };
      },
      () => {
        console.log("state P ", this.state.products[0].inCart);
        console.log("store DB P", pro.storeProducts[0].inCart);
      }
    );
  };
  */
  render() {
    return (
      <CX.Provider
        value={{
          ...this.state,
          handleBone: this.getBone,
        }}
      >
        {this.props.children}
      </CX.Provider>
    );
  }
}

const CCustomer = CX.Consumer;

export { CProvider, CCustomer };
