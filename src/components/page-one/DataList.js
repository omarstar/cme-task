import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import * as contentful from "contentful";
import DataItem from "./DataItem";

const SPACE_ID = "an9hlgfxjkpy";
const ACCESS_TOKEN = "0J-qOoWqQ0ecQepCzLInuB5xz35-LUMNHlsuVUYuZrc";

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

class DataList extends React.Component {
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

  handleSearchInputChange = (event) => {
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: "" });
    }
    this.getUnits();
  };

  render() {
    return (
      <div className="col-10 col-md-6 mx-auto my-2">
        {/* condition no data OR list of data */}
        {this.state.units ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="Search for data"
              margin="normal"
              onChange={this.handleSearchInputChange}
            />
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.units.map((currentItem) => (
                <Grid item xs={12} style={{ margin: 8 }}>
                  <DataItem unit={currentItem} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          "No data found"
        )}
      </div>
    );
  }
}

export default DataList;
