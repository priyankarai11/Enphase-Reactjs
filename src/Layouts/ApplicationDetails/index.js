import React from "react";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";

import { useStyles } from "../../pages/ApplicationIdTracker/style";

function Index() {
  const classes = useStyles();
  return (
    <>
      <div>
        <Card className={classes.information}>
          <div className={classes.applicationDetails}>
            <Typography className={classes.headerofCard}>
              Enter the following Details
            </Typography>
          </div>
          
        </Card>
      </div>
    </>
  );
}

export default Index;
