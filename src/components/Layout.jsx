import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

function Layout({ theme, toggleTheme }) {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Outlet />
      </main>

      <footer>
        <div className="footer-content">
          <h2>Ritesh Reddy Puchakayala</h2>

          <p>Computer Science & Engineering Student</p>

          <div className="footer-links">
            <a
              href="https://github.com/RiteshPuchakayala00"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ritesh-reddy-puchakayala-966759377/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="riteshpuchakayala02@gmail.com">
              Email
            </a>
          </div>

          <p className="copyright">
            © 2026 Ritesh Reddy Puchakayala. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Layout;