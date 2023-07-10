import PieChart from "../charts/PieChart";
import AnalyticsTable from "../tables/AnalyticsTable";

function AnalyticsPreview({ type, title, data }) {
  return (
    <article className="w-full py-2">
      <h3 className="font-bold text-base sm:text-lg xl:text-xl">{title}</h3>
      <figure className="md:flex items-center md:w-full">
        <PieChart data={data} className="md:flex-grow" />
        <div className="md:w-[45%]">
          <AnalyticsTable data={data} type={type} />
        </div>
      </figure>
    </article>
  );
}

export default AnalyticsPreview;
