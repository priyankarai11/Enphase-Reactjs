import React from "react";
import { Chip } from "@material-ui/core";

import { status } from "./data";
import { useStyles } from "./style";

function ChipItem() {
  const classes = useStyles();
  return (
    <div>
      {status.map((ele) => {
        if (ele.id == 1) return;
        <Chip
          avatar={
            <div
              className={classes.roundIcon}
              style={{ background: "yellow" }}
            ></div>
          }
          label={ele.title}
          size="small"
          variant="outlined"
        />;
      })}
    </div>
  );
}

export default ChipItem;
