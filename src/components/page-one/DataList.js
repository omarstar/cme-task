import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import DataItem from "./DataItem";
import { Button } from "@material-ui/core";
import PageviewIcon from "@material-ui/icons/Pageview";

function DataList(props) {
  let query = "";

  function handleSearchInputChange(event) {
    console.log("inside handleSearch query ", query);

    if (event.target.value) {
      query = event.target.value;
    } else {
      query = "";
    }
    console.log("inside handleSearch new query ", query);

    props.onSearchInput(query);
  }

  return (
    <div className="col-10 col-md-6 mx-auto my-2">
      {/* condition no data OR list of data */}
      {props.units ? (
        <div>
          <div className="d-flex align-items-center justify-content-center">
            <TextField
              id="searchInput"
              placeholder="Filter data"
              margin="normal"
              onChange={handleSearchInputChange}
            />
            <Button onClick={() => props.getData()}>
              <PageviewIcon />
            </Button>
          </div>
          <p id="search-result">
            {props.units.length === 0
              ? "No Results"
              : `data found: # ${props.units.length}`}
          </p>
          <Grid container spacing={24} style={{ padding: 10 }}>
            {props.units.map((currentItem) => (
              <Grid item xs={12} style={{ margin: 8 }}>
                <DataItem
                  key={currentItem}
                  unit={currentItem}
                  getCatId={props.getCatId}
                />
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

export default DataList;
