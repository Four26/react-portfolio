import React from "react";
import "./portfolio.css";
import IMG1 from "../../images/portfolio1.jpg";
import IMG2 from "../../images/portfolio2.jpg";
import IMG3 from "../../images/portfolio3.jpg";
import IMG4 from "../../images/portfolio4.jpg";
import IMG5 from "../../images/portfolio5.png";
import IMG6 from "../../images/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Email Marketing Dashboard",
    github: "https.//github.com",
    demo: "https://cdn.dribbble.com/userupload/3788476/file/original-fcc3977425c5024ce6f4e6a58c36629a.png?compress=1&resize=701x526&vertical=center",
  },
  {
    id: 2,
    image: IMG2,
    title: " NOQ Splash",
    github:
      "https://cdn.dribbble.com/userupload/3781909/file/original-690b0048bf6ab3af6cff9f1f2de31804.png?compress=1&resize=752x564",
  },
  {
    id: 3,
    image: IMG3,
    title: "Crypto mobile wallet",
    github: "https.//github.com",
    demo: "https://cdn.dribbble.com/userupload/3781888/file/original-41f4131a9bbcb087c762cda14f8bb3a1.png?compress=1&resize=752x564",
  },
  {
    id: 4,
    image: IMG4,
    title: "Warhammer",
    github: "https.//github.com",
    demo: "https://cdn.dribbble.com/userupload/3786704/file/original-61bba03c0650f5f30c99723ffb90fc6c.png?compress=1&resize=752x564",
  },
  {
    id: 5,
    image: IMG5,
    title: "Design Lab",
    github: "https.//github.com",
    demo: "https://cdn.dribbble.com/userupload/3787546/file/original-80f1ffb06cdfc373afbadc79c720d805.png?compress=1&resize=752x564",
  },
  {
    id: 6,
    image: IMG6,
    title: "Antex l Modern logo l creative logo l identity design",
    github: "https.//github.com",
    demo: "https://cdn.dribbble.com/userupload/3786751/file/original-b473f890e41f1c06183b6e1d3944fa9b.jpg?compress=1&resize=752x564",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>

              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
