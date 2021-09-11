import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Route} from 'react-router-dom';
import NavBar from "./components/nav-bar";
import Home from "./components/home";
import Software from "./components/software";
import Music from "./components/music";
import Contact from "./components/contact";
import About from "./components/about";
import ServerlessDiagram from "./components/aws_serverless_diagram";
import ScrollToTop from "./components/scroll_to_top";
import React from "react";
import Modal from "./components/modal";
import ModalImage from "./components/modal_image";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
          <NavBar/>
          {/*<ModalImage/>*/}
          <div className={"container"}>
              <About/>
              <Route path="/" exact={true}>
                <Home/>
              </Route>
              <Route path="/about" exact={false}>
                  <ScrollToTop/>
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
              <Route path="/serverless_diagram" exact={false}>
                  <ServerlessDiagram/>
              </Route>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
