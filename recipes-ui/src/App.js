import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import MainNavigation from "./shared/components/navigation/MainNavigation";
import "./App.css";

const App = () => {
  const routes = (
    <Routes>
      <Route path="/" exact></Route>
      <Route path="/addrecipes" exact></Route>
      <Navigate to="/" />
    </Routes>
  );
  return (
    <div>
      <p>Header</p>
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </div>
  );
};

export default App;
