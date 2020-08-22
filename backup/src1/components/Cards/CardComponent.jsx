import React, { Component } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

export default class CardComponent extends Component {
  render() {
    let {
      data: { name, classname, value, date, body },
    } = this.props;
    date = new Date(date).toDateString();

    return (
      <Grid item component={Card} xs={12} md={3} className={classname}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5">
            <CountUp start={0} end={value} duration={2.5} separator="," />
          </Typography>
          <Typography color="textSecondary">{date}</Typography>
          <Typography variant="body2">{body}</Typography>
        </CardContent>
      </Grid>
    );
  }
}
