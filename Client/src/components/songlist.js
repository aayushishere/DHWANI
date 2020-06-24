import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%",
    maxWidth: "677px",
    minWidth: "300px",
    cursor: "pointer",
    borderRadius: "10px"
    // backgroundColor: "red"
  },
  inline: {
    display: "inline"
  }
}));

export default function SongList({ song }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem button alignItems="flex-start" onClick={onclick}>
        <ListItemAvatar>
          <Avatar variant="rounded" alt="Travis Howard" src={song.image} />
        </ListItemAvatar>
        <ListItemText
          primary={song.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              />
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
