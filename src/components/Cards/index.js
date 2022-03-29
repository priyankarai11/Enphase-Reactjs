import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { useNavigate } from "react-router";
import { useStyles } from "./style";
import { dataItems } from "./data";

function Cards() {
  const classes = useStyles();
  const navigate = useNavigate();

  const applicationTrack = () => {
    navigate("/aps-application-tracker");
  };

  const token = sessionStorage.getItem("auth");

  const getData = () => {
    fetch(
      "https://gs-dev.qa-enphaseenergy.com/programs-mgr/api/v1/application/programs",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          auth: JSON.stringify(token),
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={classes.cardview}>
      <div className={classes.card_view}>
        {dataItems.map((person) => (
          <Card
            key={person.id}
            className={classes.root}
            onClick={applicationTrack}
          >
            <CardContent className={classes.cardsDisplay}>
              <Typography
                className={classes.residental}
                variant="h5"
                component="h2"
              >
                {person.title}{" "}
                <KeyboardArrowRightIcon className={classes.arrow} />
              </Typography>

              <Divider />
              <List>
                <ListItem>
                  <ListItemText
                    className={classes.cardItems}
                    secondary="Utility"
                  />
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
