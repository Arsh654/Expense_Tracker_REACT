import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  //NEED TO IND THE MAX OF ALL SO THAT WE CAN DECID THE MAX LENGTH OF THE CHART.
  //AS PROPS CONTAINS THE OBJECT SO FIRST NEED TO CONVERT IT TO THE NUMBER AND THEN PASS IT TO THE MAAX FUNCTION.

  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
