import { Chart } from "chart.js/auto";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import colors from "tailwindcss/colors";

function ChartWrapper({ config, className }) {
  const chartRef = useRef(null);
  const canvasRef = useRef(null);
  const classes = classNames("p-2", className);
  useEffect(() => {
    (async function () {
      chartRef.current = new Chart(canvasRef.current, config);
    })();

    return () => chartRef.current.destroy();
  }, [config]);

  return (
    <div className={classes}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

function PieChart({ data }) {
  const config = {
    type: "doughnut",
    data: {
      labels: data.map((el) => el.category || el.party),
      datasets: [
        {
          label: "Amount",
          data: data.map((el) => el.amount),
          backgroundColor: [
            colors.red[400],
            colors.emerald[400],
            colors.purple[400],
            colors.sky[400],
            colors.indigo[400],
            colors.pink[400],
            colors.violet[400],
            colors.lime[400],
            colors.rose[400],
            colors.amber[400],
          ],
          weight: 30,
          cicular: true,
          hoverOffset: 4,
        },
      ],
    },
    options: {
      layout: {
        padding: 10,
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#fff",
          },
        },
      },
    },
  };

  return <ChartWrapper config={config} />;
}
function PartyChart({ data }) {}

export { PieChart, PartyChart };

export default ChartWrapper;
