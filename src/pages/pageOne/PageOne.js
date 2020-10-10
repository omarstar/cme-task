import React from "react";
//import { CCustomer } from "../../services/Context";
import "./pg1-style.css";
import DataList from "../../components/page-one/DataList";
import DataItem from "../../components/page-one/DataItem";

export default class PageOne extends React.Component {
  render() {
    return (
      <React.Fragment>
        <DataList />
      </React.Fragment>
    );
  }
}
