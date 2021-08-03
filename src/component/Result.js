import React from "react";
import "./Result.css";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import Bounce from "react-reveal/Bounce";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

function Result({ data }) {
  const classes = useStyles();
  return (
    <div className="result">
      <div className={classes.root}>
        <Paper className="result__paper" elevation={10}>
          <div className="result__sname">
            <Rotate top left cascade>
              <h4>You : {data.sname}</h4>
            </Rotate>
          </div>
          <div className="result__fname">
            <Rotate top left cascade>
              <h4>Your Crush : {data.fname}</h4>
            </Rotate>
          </div>

          <div className="result__percentage">
            <Zoom left cascade>
              <h4>Bond : {data.percentage}%</h4>
            </Zoom>
          </div>
          <div className="result__result">
            <Bounce left cascade>
              <h4>{data.result}</h4>
            </Bounce>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default Result;
