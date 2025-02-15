import { meImgs, meMain } from "../../assets/images/me";
import { TAGS } from "../../constants/constants";
import "./WhoAmI.css";

export const WhoAmI = () => {
  return (
    <section className="who-am-i">
      <div className="img-grid">
        {meImgs.map((img) => (
          <img key={img} src={img} />
        ))}
      </div>
      <img src={meMain} alt="profile-img" className="img-hero" />
      <div className="text-hero">
        <p>היי 👋🏼</p>
        <p>
          זה <span>אלמוג</span>
        </p>
      </div>
      <h2 className="tags-title">הנה אני ב15 מילים</h2>
      <div className="tags">
        {TAGS.map((tag) => (
          <span key={tag} className="tag-item">{tag}</span>
        ))}
      </div>
    </section>
  );
};
