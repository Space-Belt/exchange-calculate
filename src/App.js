import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import FirstCalculater from "./routes/FirstCalculater";
import SecondCalculater from "./components/SecondCalculater";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path={"/"} element={<FirstCalculater />} />
        <Route path={"/second"} element={<SecondCalculater />} />
      </Routes>
    </Router>
  );
}

export default App;
