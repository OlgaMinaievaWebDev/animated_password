import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <Link to="/password">Password</Link>
      <Link to="/movie">Movie</Link>
    </div>
  );
}

export default Main;
