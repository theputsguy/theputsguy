import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const Login = () => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    form: {
      minWidth: "50%", // Fix IE 11 issue.
      maxWidth: "90%",
      marginTop: theme.spacing(1),
      background: "white",
      padding: "1em",
      borderRadius: "5px",
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  const classes = useStyles();

  let user = "";
  let pass = "";
  let [submitActive, setSubmitActive] = useState(false);
  const userName = (e) => {
    user = e.currentTarget.value;
    loginChecker();
  };
  const password = (e) => {
    pass = e.currentTarget.value;
    loginChecker();
  };
  const loginChecker = () => {
    if (user === "theputsguy" && pass === "Th3PutsGuy!") {
      console.log("success");
      setSubmitActive(true);
    } else {
      setSubmitActive(false);
    }
  };
  return (
    <div className="login">
      <div className={classes.paper}>
        <div className={classes.form} noValidate>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="User"
            name="email"
            onChange={userName}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={password}
          />
          <Link to="/create" className={`${submitActive ? "" : "hidden"}`}>
            <Button fullWidth variant="contained" color="primary" className={classes.submit}>
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
