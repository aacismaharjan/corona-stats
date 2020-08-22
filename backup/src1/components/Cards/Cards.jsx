import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./Cards.module.css";
import cx from "classnames";
import CardComponent from "./CardComponent";

export default function Cards({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {
  const [state, setState] = useState([]);

  if (!confirmed) {
    return <CircularProgress />;
  }

  const cardsData = [
    {
      name: "Infected",
      value: confirmed.value,
      date: lastUpdate,
      body: "Number of active cases of COVID-19",
      classname: cx(styles.card, styles.infected),
    },
    {
      name: "Recovered",
      value: recovered.value,
      date: lastUpdate,
      body: "Number of recoveries from COVID-19",
      classname: cx(styles.card, styles.recovered),
    },
    {
      name: "Deaths",
      value: deaths.value,
      date: lastUpdate,
      body: "Number of deaths caused by COVID-19",
      classname: cx(styles.card, styles.deaths),
    },
  ];

  console.log(cardsData);

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {cardsData.map((card) => (
          <CardComponent data={card} />
        ))}
      </Grid>
    </div>
  );
}
