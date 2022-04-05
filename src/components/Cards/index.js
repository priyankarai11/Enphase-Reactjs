import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { TOKEN } from "../../components/sessionStorage/index";
import { useNavigate } from "react-router";
import { useStyles } from "./style";

function Cards() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [cardItem, setCardItem] = useState([]);

  const getData = async () => {
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
      "GS-Enphase-Auth": TOKEN,
    });
    await fetch(
      "https://gs-dev.qa-enphaseenergy.com/programs-mgr/api/v1/application/programs",
      {
        method: "GET",
        headers: myHeaders,
      }
    )
      .then((response) => response.json())
      .then((res) => {
        setIsLoading(false);

        const set = res.data.map((ele) => ele);

        setCardItem(set);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={classes.cardview}>
      <div className={classes.card_view}>
        {isLoading && <CircularProgress className={classes.loaderShow} />}
        {cardItem.map((person) => (
          <Card
            key={person.id}
            className={classes.root}
            onClick={() =>
              navigate(`/aps-application-tracker/${person.id}/${person.name}`)
            }
          >
            {" "}
            <CardContent className={classes.cardsDisplay}>
              <Typography
                className={classes.residental}
                variant="h5"
                component="h2"
              >
                {person.name}
                <KeyboardArrowRightIcon className={classes.arrow} />
              </Typography>

              <Divider />
              <List>
                <ListItem>
                  <ListItemText
                    className={classes.cardItems}
                    secondary="Utility"
                  />
                  {person.utility_name}
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText secondary="State" />
                  {person.state_name}
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
