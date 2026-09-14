import { useState } from "react";
import "../style.css";

function About() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="about" className="about">
        <div className="section-title">
          <h2>About Me</h2>
        </div>

        <div className="about-container">
          <article className="about-content">

            <p>
              I'm <strong>Ritesh Reddy Puchakayala</strong>, a Computer Science
              and Engineering student at National Institute of Technology
              Warangal.
            </p>

            <p>
              I enjoy building responsive web applications, learning modern
              technologies, and solving challenging programming problems.
            </p>

            <p>
              My current focus is Full Stack Development, Java Backend
              Development, and Data Structures & Algorithms.
            </p>
          </article>

          <aside className="education-card">
            <h3>Education</h3>

            <div className="info">
              <h4>B.Tech</h4>

              <p>Computer Science & Engineering</p>

              <p>NIT Warangal</p>

              <span>2024 - 2028</span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export default About;
