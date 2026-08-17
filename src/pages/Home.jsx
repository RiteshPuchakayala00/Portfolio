import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile.png";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <section className="loading">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="intro">HELLO,</p>

        <h1>
          I'm <span>Ritesh Reddy Puchakayala</span>
        </h1>

        <h2>Computer Science Student</h2>

        <p className="description">
          Building responsive web applications, learning modern technologies
          and solving real-world problems through software.
        </p>

        <div className="hero-buttons">
          <a href="assets/resume.pdf" className="btn primary">
            Download Resume
          </a>

          <Link to="/projects" className="btn secondary">
            View Projects
          </Link>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-wrapper">
          <img
            src={profileImage}
            alt="Ritesh Reddy Puchakayala"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;