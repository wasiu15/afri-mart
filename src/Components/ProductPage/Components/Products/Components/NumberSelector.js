import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50px",
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();
  const [quantity, setQuantity] = useState("");

  const updateProductQuantity = (event) => {
    setQuantity(event.target.value);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-number"
          type="number"
          value={quantity < 1 ? "" : quantity > 20 ? "20" : quantity}
          onChange={updateProductQuantity}
          variant="outlined"
        />
      </div>
    </form>
  );
}
