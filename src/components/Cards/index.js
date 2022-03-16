import React from "react";
import { Card } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { useStyles } from "./style";
import { dataItems } from "./data";

const applicationTrack = () => {
  window.location.href = "/application-tracker";
};

function Cards() {
  const classes = useStyles();

  return (
    <div className={classes.cardview}>
      <div className={classes.card_view}>
        {dataItems.map((person) => (
          <Card className={classes.root} onClick={applicationTrack}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {person.title}{" "}
                <KeyboardArrowRightIcon className={classes.arrow} />
              </Typography>

              <Divider />
              <List>
                <ListItem>
                  <ListItemText secondary="Utility" />
                  {person.utility}
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText secondary="State" />
                  {person.state}
                </ListItem>
              </List>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Cards;
