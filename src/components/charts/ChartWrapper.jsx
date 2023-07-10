import { Chart } from "chart.js/auto";
import classNames from "classnames";
import { useEffect, useRef } from "react";

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

export default ChartWrapper;
