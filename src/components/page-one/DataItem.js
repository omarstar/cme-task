import React from "react";
import { cardContainer, imgBox } from "../../styles/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const DataItem = (props) => {
  const fld = props.unit.fields;
  return (
    <div>
      {props.unit ? (
        <Card style={cardContainer} className="card-container">
          <CardMedia
            style={imgBox}
            image={fld.image.fields.file.url}
            title={fld.title}
          />
          <CardContent style={{ padding: 10 }}>
            <Typography gutterButtom variant="headline" component="h3">
              {fld.category}
            </Typography>
            {/* <Typography component="p" style={{ width: "70%" }}>
              {fld.description}
            </Typography> */}
          </CardContent>
          {/* <CardActions>
            <Button size="small" color="primary" href={fld.url} target="_blank">
              Watch a Demo
            </Button>
          </CardActions> */}
        </Card>
      ) : (
        "no item"
      )}
    </div>
  );
};

export default DataItem;
