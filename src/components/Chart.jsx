import { Chart } from "chart.js/auto";
import classNames from "classnames";
import { useEffect, useRef } from "react";

function ChartWrapper({ data, className }) {
  const chartRef = useRef(null);
  const canvasRef = useRef(null);
  const classes = classNames(className);
  useEffect(() => {
    (async function () {
      const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
      ];

      chartRef.current = new Chart(canvasRef.current, {
        type: "bar",
        data: {
          labels: data.map((row) => row.year),
          datasets: [
            {
              label: "Acquisitions by year",
              data: data.map((row) => row.count),
            },
          ],
        },
      });
    })();

    return () => chartRef.current.destroy();
  }, []);

  return (
    <div className={classes}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default ChartWrapper;
