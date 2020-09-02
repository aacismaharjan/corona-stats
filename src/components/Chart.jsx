import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";
import { fetchDailyData } from "../api";
import Loading from "./Loading";

export default class Chart extends Component {
  state = {
    dailyData: [],
  };

  async componentDidMount() {
    const data = await fetchDailyData();
    if (data) this.setState({ dailyData: data });
  }

  render() {
    const { dailyData } = this.state;
    const {
      data: { confirmed, recovered, deaths },
      country,
      loading,
    } = this.props.data;

    const lineChart = dailyData.length ? (
      <Line
        data={{
          labels: dailyData.map(({ reportDate }) => reportDate),
          datasets: [
            {
              label: "Infected",
              fill: true,
              borderColor: "#3333ff",
              data: dailyData.map(({ confirmed }) => confirmed),
            },
            {
              label: "Deaths",
              fill: true,
              borderColor: "red",
              backgroundColor: "rgba(255, 0, 0, .5)",
              data: dailyData.map(({ deaths }) => deaths),
            },
          ],
        }}
      />
    ) : null;

    const barChart = confirmed ? (
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              labels: "People",
              backgroundColor: [
                "rgba(0, 0, 255, 0.5)",
                "rgba(0, 255, 0, 0.5)",
                "rgba(255, 0, 0, 0.5)",
              ],
              data: [confirmed, recovered, deaths],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: {
            display: true,
            text: `Current state in ${country || "World Wide"}`,
          },
        }}
      />
    ) : null;

    let wrapper = <div className="chart">{country ? barChart : lineChart}</div>;

    return <div className="diagram">{loading ? <Loading /> : wrapper}</div>;
  }
}
