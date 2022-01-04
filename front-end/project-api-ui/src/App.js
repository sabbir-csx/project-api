// import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Home";
import { Department } from "./Department";
import { Employee } from "./Employee";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h3 className="d-flex justify-content-center m-3">ReactJS Front-End</h3>

        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item m-1">
              <NavLink className="btn btn-light btn-ourline-primary" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink
                className="btn btn-light btn-ourline-primary"
                to="/department"
              >
                Department
              </NavLink>
            </li>
            <li className="nav-item m-1">
              <NavLink
                className="btn btn-light btn-ourline-primary"
                to="/employee"
              >
                Employee
              </NavLink>
            </li>
          </ul>
        </nav>
        <switch>
          <Route path="/home" component={Home} />
          <Route path="/department" component={Department} />
          <Route path="/employee" component={Employee} />
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
