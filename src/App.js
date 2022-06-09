import "./App.css";
import MoviesGrid from "./components/MoviesGrid";
import s from "./components/App.module.css";
import { Route, Link } from "react-router-dom";
import MoviesDetails from "./pages/MoviesDetails";
import LandingPage from "./pages/LandingPage";
import logo from "./img/pngwing.com.png";

function App() {
  return (
    <div>
      <header>
        <Link exact to="/"> 
        <div className={s.container}>
        <img
          className={s.logoImg}
          src={logo}
        />
        </div> 
          <h1 className={s.title}>Take a seat</h1>
        </Link>
      </header>
      <main>
        <Route exact path="/movies/:movieId">
          <MoviesDetails />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </main>
    </div>
  );
}

export default App;

/* rutas dinamicas con :movies */
