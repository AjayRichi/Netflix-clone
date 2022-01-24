import {BrowserRouter as Router,Route,Routes,} from "react-router-dom";
import Movies from "./Components/Movies";
import Signin from "./Components/Signin";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Movies />}></Route>
          <Route exact path="/signin" element={<Signin />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
