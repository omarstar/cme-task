import React from "react";
//import { CCustomer } from "../../services/Context";
import "./pg1-style.css";
import DataList from "../../components/page-one/DataList";
import DataDetails from "../../components/page-one/DataDetails";

export default class PageOne extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <DataList />
            <DataDetails />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
