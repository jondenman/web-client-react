import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Route} from 'react-router-dom';
import NavBar from "./components/nav-bar";
import Home from "./components/home";
import Software from "./components/software";
import Music from "./components/music";
import Contact from "./components/contact";
import About from "./components/about";
import ServerlessDiagram from "./components/serverless_diagram/aws_serverless_diagram";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
          <NavBar/>
          <div className={"container"}>
              <Route path="/" exact={true}>
                <Home/>
              </Route>
              <Route path="/software" exact={false}>
                <Software/>
              </Route>
              <Route path="/music" exact={true}>
                <Music/>
              </Route>
              <Route path="/contact" exact={true}>
                <Contact/>
              </Route>
              <Route path="/about" exact={true}>
                <About/>
              </Route>
              <Route path="/serverless_diagram" exact={false}>
                  <ServerlessDiagram/>
              </Route>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
