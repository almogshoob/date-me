import { suitabilityList } from "../../constants/constants";
import "./WhoIsItFor.css";

export const WhoIsItFor = () => {
  return (
    <section className="who-is-it-for">
      <h2>למי זה מתאים?</h2>
      <ol className="suitability-list">
        {suitabilityList.map((item, i) => (
          <li key={i}>
            <span className="item-counter">{i + 1}</span>
            <span className="item-content">{item}</span>
          </li>
        ))}
      </ol>
    </section>
  );
};
