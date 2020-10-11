import React from "react";
//import { CCustomer } from "../../services/Context";
import "./pg1-style.css";
import DataList from "../../components/page-one/DataList";
import DataDetails from "../../components/page-one/DataDetails";
import * as contentful from "contentful";

const SPACE_ID = "an9hlgfxjkpy";
const ACCESS_TOKEN = "0J-qOoWqQ0ecQepCzLInuB5xz35-LUMNHlsuVUYuZrc";

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

export default class PageOne extends React.Component {
  state = {
    units: [],
    searchString: "",
  };

  constructor(props) {
    super(props);
    this.getUnits();
  }

  getUnits = () => {
    client
      .getEntries({
        content_type: "units",
        query: this.state.searchString,
      })
      .then((Response) => {
        this.setState({ units: Response.items });
      })
      .catch((error) => {
        console.log("error while fetching contentful: ", error);
      });
  };

  setSearchString = (inputString) => {
    console.log("inside setSearch input ", inputString);
    console.log("inside setSearch state ", this.state.searchString);
    this.setState(() => {
      return {
        searchString: inputString,
      };
    });
    console.log("inside setSearch new state ", this.state.searchString);
    this.getUnits();
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <DataList
              units={this.state.units}
              onSearchInput={this.setSearchString}
              getData={this.getUnits}
            />
            <DataDetails />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
