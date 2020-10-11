import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  imgBox: { height: 0, width: "30%", paddingTop: "30%" },
  cardContainer: {
    background: "rgba(0, 0, 0, 0.3)",
  },
});

const DataDetails = (props) => {
  const classes = useStyles();
  const isData = props.unit ? true : false;
  const fld = props.unit ? props.unit.fields : null;

  return (
    <div className="col-10 col-md-6 mx-auto my-2 d-flex justify-content-center align-items-center">
      {isData ? (
        <Card className={classes.cardContainer}>
          <div
            className="d-flex align-items-center"
            style={{ "justify-content": "space-around" }}
          >
            <CardMedia
              className={classes.imgBox}
              image={fld.image.fields.file.url}
              title={fld.title}
            />
            <Typography gutterBottom variant="subtitle1" component="h2">
              {fld.title}
            </Typography>
          </div>
          <CardContent>
            <Typography variant="body1" color="textPrimary" component="p">
              {fld.category}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {fld.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" href={fld.url} target="_blank">
              Watch the demo on youtube
            </Button>
          </CardActions>
        </Card>
      ) : (
        "No Data To Display"
      )}
    </div>
  );
};

export default DataDetails;
