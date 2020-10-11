import React from "react";
import { cardContainer, imgBox } from "../../styles/styles";
import {
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

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
          <ButtonBase onClick={() => props.getCatId(fld.category)}>
            <CardContent style={{ padding: 10 }}>
              <Typography gutterButtom variant="subtitle1" component="h3">
                {fld.category}
              </Typography>
            </CardContent>
          </ButtonBase>
        </Card>
      ) : (
        "no item"
      )}
    </div>
  );
};

export default DataItem;
