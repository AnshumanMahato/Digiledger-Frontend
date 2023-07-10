import colors from "tailwindcss/colors";
import ChartWrapper from "./ChartWrapper";

function PieChart({ data, className }) {
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
      responsive: true,
      layout: {
        padding: 10,
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#fff",
            font: {
              size: 20,
            },
          },
        },
      },
    },
  };

  return <ChartWrapper config={config} className={className} />;
}
export default PieChart;
