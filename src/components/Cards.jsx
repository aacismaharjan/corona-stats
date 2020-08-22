import React, { Component } from "react";
import Section from "./Section";
import CountUp from "react-countup";
import Loading from "./Loading";

export const Card = ({
  card: { title, cases, date, body, className },
  loading,
}) => {
  const getClass = (name) => `card ${name}`;
  const CardContent = (
    <React.Fragment>
      <h4 className="title">{title}</h4>
      <h1 className="cases">
        <CountUp
          start={0}
          end={parseInt(cases)}
          duration={2.5}
          separator=","
        ></CountUp>
      </h1>
      <h4 className="date">{date}</h4>
      <p>{body}</p>
    </React.Fragment>
  );

  return (
    <div className={getClass(className)}>
      {loading ? <Loading /> : CardContent}
    </div>
  );
};

const Cards = ({ defaultData, country, loading }) => {
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
    let { confirmed, recovered, deaths, lastUpdate } = defaultData;
    lastUpdate = new Date(lastUpdate).toDateString();

    var cards = [
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
            <Card card={card} key={index} loading={loading} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Cards;
