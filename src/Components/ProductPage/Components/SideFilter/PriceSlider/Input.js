import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const price = [];
for (let i = 0; i <= 100; i = i + 5) {
  i == 0 ? price.push(1) : price.push(i);
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "70px",
    },
  },
}));

export default function MultilineTextFields({
  startValue,
  stopValue,
  startHandler,
  stopHandler,
}) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="inputs">
        <TextField
          id="outlined-select-min-amount"
          select
          label="Start"
          value={startValue}
          onChange={(e, val) => startHandler(val.props.value)}
          variant="outlined"
        >
          {price.map((option) => (
            <MenuItem key={option} value={option}>
              {"$" + option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-max-amount"
          select
          label="Stop"
          value={stopValue}
          onChange={(e, val) => stopHandler(val.props.value)}
          variant="outlined"
        >
          {price.map((option) => (
            <MenuItem key={option} value={option}>
              {"$" + option}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
