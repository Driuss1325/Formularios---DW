import * as React from "react";

import MedicForm from "./forms/MedicForm";
import EmpleoForm from "./forms/EmpleoForm";
import CursoForm from "./forms/CursoForm";
import CotizacionForm from "./forms/CotizacionForm";
import HotelForm from "./forms/HotelForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <nav
        style={{ height: "60px" }}
        className="navbar navbar-expand navbar-dark bg-dark"
      >
        <a
          href={"/inicio"}
          className="navbar-brand"
          style={{ fontWeight: "bold", fontSize: 24 }}
        >
          Formularios Chidos
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              to={"/medico"}
              className="nav-link"
              style={{ fontWeight: "bold", fontSize: 18 }}
            >
              Medico
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/cotizacion"}
              className="nav-link"
              style={{ fontWeight: "bold", fontSize: 18 }}
            >
              Cotizacion
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/curso"}
              className="nav-link"
              style={{ fontWeight: "bold", fontSize: 18 }}
            >
              Curso
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/empleo"}
              className="nav-link"
              style={{ fontWeight: "bold", fontSize: 18 }}
            >
              Empleo
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/hotel"}
              className="nav-link"
              style={{ fontWeight: "bold", fontSize: 18 }}
            >
              Hotel
            </Link>
          </li>
        </div>
      </nav>
      <div
        style={{
         
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
         }}
      >
        <Switch>
          <Route
            exact
            path={["/", "/inicio", "/medico"]}
            component={MedicForm}
          />
          <Route exact path="/cotizacion" component={CotizacionForm} />
          <Route exact path="/curso" component={CursoForm} />
          <Route exact path="/empleo" component={EmpleoForm} />
          <Route exact path="/hotel" component={HotelForm} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
