import "@/app/styles/donutChart.css";
import { PieChart } from "react-minimal-pie-chart";

const ImpactStats = () => {
  return (
    <section className="impact">
      <div className="title page_title">
        <h2>Your Impact</h2>
      </div>
      <h3 className="mb-4">
        You&apos;ve saved <strong>2.5 Kgs</strong> of e-waste from ending up in
        landfills and polluting the planet
      </h3>
      <ul className="stats">
        <li className="chart">
          <PieChart
            className="donut-chart"
            data={[{ title: "One", value: 10, color: "#4ba950" }]}
            background="#EEE"
            totalValue={50}
            rounded={true}
            lineWidth={15}
          />
          <div className="chart-text">
            <span className="amount">7g</span>
            <span className="label">Lead</span>
          </div>
        </li>
        <li className="chart">
          <PieChart
            className="donut-chart"
            data={[{ title: "Two", value: 10, color: "#4ba950" }]}
            background="#EEE"
            totalValue={50}
            rounded={true}
            lineWidth={15}
          />
          <div className="chart-text">
            <span className="amount">7g</span>
            <span className="label">Mercury</span>
          </div>
        </li>
        <li className="chart">
          <PieChart
            className="donut-chart"
            data={[{ title: "Three", value: 10, color: "#4ba950" }]}
            background="#EEE"
            totalValue={50}
            rounded={true}
            lineWidth={15}
          />
          <div className="chart-text">
            <span className="amount">7g</span>
            <span className="label">Cadmium</span>
          </div>
        </li>
        <li className="chart">
          <PieChart
            className="donut-chart"
            data={[{ title: "Four", value: 10, color: "#4ba950" }]}
            background="#EEE"
            totalValue={50}
            rounded={true}
            lineWidth={15}
          />
          <div className="chart-text">
            <span className="amount">7g</span>
            <span className="label">Lithium</span>
          </div>
        </li>
        <li className="chart">
          <PieChart
            className="donut-chart"
            data={[{ title: "Five", value: 10, color: "#4ba950" }]}
            background="#EEE"
            totalValue={50}
            rounded={true}
            lineWidth={15}
          />
          <div className="chart-text">
            <span className="amount">7g</span>
            <span className="label">Plastic</span>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ImpactStats;
