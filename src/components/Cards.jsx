import React from "react";
import Section from "./Section";
import CountUp from "react-countup";
import Loading from "./Loading";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    fontFamily: "Poppins, sans-serif",
    minWidth: 275,
    background: "transparent",
    color: "white",
    boxShadow: "none",
  },
});

export function SimpleCard({
  card: { title, cases, date, body, className },
  loading,
}) {
  const classes = useStyles();
  const getClass = (name) => `card ${name}`;

  const MyCardContent = (
    <Card className={classes.root}>
      <CardContent>
        <Typography className="title" color="textSecondary" gutterBottom>
          {title.toUpperCase()}
        </Typography>
        <Typography variant="h4" component="h4" className="cases">
          <CountUp
            start={0}
            end={parseInt(cases)}
            duration={2.5}
            separator=","
          ></CountUp>
        </Typography>
        <Typography className="date" color="textSecondary">
          {date}
        </Typography>
        <Typography variant="body1" component="p">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <div className={getClass(className)}>
      {loading ? <Loading /> : MyCardContent}
    </div>
  );
}

const Cards = ({ data: { data, country, loading } }) => {
  var cards = [
    {
      title: "Infected",
      className: "infected",
      body: "Number of active cases of COVID-19",
    },
    {
      title: "Recovered",
      className: "recovered",
      body: "Number of recoveries from COVID-19",
    },
    {
      title: "Deaths",
      className: "deaths",
      body: "Number of deaths caused by COVID-19",
    },
  ];

  if (!loading) {
    let { confirmed, recovered, deaths, lastUpdate } = data;
    lastUpdate = new Date(lastUpdate).toDateString();

    cards = [
      {
        title: "Infected",
        cases: confirmed,
        date: lastUpdate,
        className: "infected",
        body: "Number of active cases of COVID-19",
      },
      {
        title: "Recovered",
        cases: recovered,
        date: lastUpdate,
        className: "recovered",
        body: "Number of recoveries from COVID-19",
      },
      {
        title: "Deaths",
        cases: deaths,
        date: lastUpdate,
        className: "deaths",
        body: "Number of deaths caused by COVID-19",
      },
    ];
  }

  return (
    <div>
      <Section title={country || "World Wide"} isShade>
        <div className="cards">
          {cards.map((card, index) => (
            <SimpleCard card={card} key={index} loading={loading} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Cards;
