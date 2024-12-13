import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movie from "./components/Movie";
import Password from "./components/Password";
import Main from "./layout/Main";
import TextArea from "./components/TextArea";

function App() {
  return (
    <Router>
      <Main />
      <Routes>
        <Route path="movie" element={<Movie />} />
        <Route path="password" element={<Password />} />
        <Route path="textArea" element={<TextArea />} />
      </Routes>
    </Router>
  );
}

export default App;
