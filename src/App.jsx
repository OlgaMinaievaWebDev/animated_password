import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import Movie from "./components/Movie";
import Password from "./components/Password";
import Main from "./layout/Main";

function App() {
  return (
    <Router>
      <Main />
      <Routes>
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie-1" element={<Movie-1 />} />
        <Route path="password" element={<Password />} />
      </Routes>
    </Router>
  );
}

export default App;
