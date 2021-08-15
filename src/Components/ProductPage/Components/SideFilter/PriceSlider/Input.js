import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const price = [
  {
    value: "10",
    label: "$10",
  },
  {
    value: "20",
    label: "$20",
  },
  {
    value: "30",
    label: "$30",
  },
  {
    value: "40",
    label: "$40",
  },
  {
    value: "50",
    label: "$50",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [Amount, setAmount] = React.useState("10");

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="inputs">
        <TextField
          id="outlined-select-min-amount"
          select
          label="Stop"
          value={Amount}
          onChange={handleChange}
          variant="outlined"
        >
          {price.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-max-amount"
          select
          label="Stop"
          value={Amount}
          onChange={handleChange}
          variant="outlined"
        >
          {price.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
