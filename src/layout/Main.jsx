import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <Link to="/password">Password</Link>
      <Link to="/movie">Movie</Link>
      <Link to="/textArea">TextArea</Link>
    </div>
  );
}

export default Main;
