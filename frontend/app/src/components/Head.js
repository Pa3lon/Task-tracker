import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import DashBoardIcon from "@material-ui/icons/ListAltRounded";
import AddIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import HistoryIcon from "@material-ui/icons/FileCopySharp";
import StatisticIcon from "@material-ui/icons/BarChart";
import Typografy from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
  },
  buttonAdd: {
    color: "white",
    flexGrow: 1,
  },
}));

export const Head = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.root}>
            <DashBoardIcon />
          </IconButton>
          <IconButton className={classes.root}>
            <HistoryIcon />
          </IconButton>
          <IconButton className={classes.root}>
            <StatisticIcon />
          </IconButton>
          <Typografy className={classes.buttonAdd}></Typografy>
          <IconButton className={classes.root}>
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};
