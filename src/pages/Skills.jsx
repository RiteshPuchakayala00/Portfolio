import { useState } from "react";
import "../style.css";

function Skills() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="skills" className="skills">
        <div className="section-title">
          <h2>Skills</h2>

          <p>Technologies I work with</p>
        </div>

        <div className="skills-grid">
          <article className="skill-card">
            <h3>Programming</h3>

            <ul>
              <li>C</li>

              <li>C++</li>

              <li>Java</li>

              <li>Python</li>
            </ul>
          </article>

          <article className="skill-card">
            <h3>Frontend</h3>

            <ul>
              <li>HTML5</li>

              <li>CSS3</li>

              <li>JavaScript</li>

              <li>React</li>
            </ul>
          </article>

          <article className="skill-card">
            <h3>Backend</h3>

            <ul>
              <li>Spring Boot</li>

              <li>Spring Security</li>

              <li>REST APIs</li>

              <li>Hibernate</li>
            </ul>
          </article>

          <article className="skill-card">
            <h3>Tools</h3>

            <ul>
              <li>Git</li>

              <li>GitHub</li>

              <li>VS Code</li>

              <li>MySQL</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="skills"></section>
    </>
  );
}

export default Skills;
