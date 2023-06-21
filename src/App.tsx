import "./App.css";
import SignIn from "./Cmponents/SignIn";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import Home from "./Cmponents/Home";

function App() {
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  const routeChange = (path: string) => {
    setLogged(true);
    // navigate(path);
  };

  if (!logged)
    return (
      <Routes>
        <Route path="/" element={<SignIn navigate={routeChange} />} />
      </Routes>
    );
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
