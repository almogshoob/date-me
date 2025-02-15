import "./Contact.css";

export const Contact = () => {
  return (
    <section className="contact">
      <p className="cta">
        <span>בקיצור, אם זה העלה לך חיוך או נראה לך</span>
        <br />
        <span> מתאים - נתראה שם? :)</span>
      </p>
      <div className="icon-links">
        <a
          target="_blank"
          href=" https://wa.me/972587411533"
          referrerPolicy="no-referrer"
        >
          <i className="fa-b icon whatsapp"></i>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/almogshoob"
          referrerPolicy="no-referrer"
        >
          <i className="fa-b icon instagram"></i>
        </a>
      </div>
    </section>
  );
};
