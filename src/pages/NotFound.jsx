import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/Home" className="btn primary" style={{ marginTop: "20px", display: "inline-block" }}>
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
