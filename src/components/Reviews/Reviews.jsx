import { REVIEWS } from "../../constants/constants";
import "./Reviews.css";

export const Reviews = () => {
  return (
    <section className="reviews">
      <h2>לקוחות מספרים</h2>
      <div className="reviews-list">
        {REVIEWS.map((review, i) => {
          return (
            <div key={i} className="review-item">
              <div className="reviewer">
                <img src={review.img} alt="reviewer image" />
                <p>{review.desc}</p>
              </div>
              <p>{review.review}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
