import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movie from "./components/Movie";
import Password from "./components/Password";
import TextArea from "./components/TextArea";
import CharacterCounter from "./components/CharacterCounter";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/password" element={<Password />} />
        <Route path="/textArea" element={<TextArea />} />
        <Route path="/counter" element={<CharacterCounter />} />
      </Routes>
    </Router>
  );
}

export default App;
