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
import JournalMine from "./components/journal_mine";
import Search from "./components/musicDB/search";

function App() {
  return (
    <BrowserRouter>
      <Home/>
      <div className="container-fluid">
          <NavBar/>
          {/*<ModalImage/>*/}
          <div className={"container"}>

              <About/>
              {/*<Route path="/" exact={true}>*/}
              {/*  */}
              {/*</Route>*/}
              <Route path="/about" exact={false}>
                  <ScrollToTop/>
              </Route>
              {/*<Route path="/software" exact={false}>*/}
                <Software/>
              {/*</Route>*/}
              {/*<Route path="/music" exact={true}>*/}
              {/*  <Music/>*/}
              {/*</Route>*/}
              {/*<Route path="/contact" exact={true}>*/}
                <Contact/>
              {/*</Route>*/}
              <Route path="/serverless_diagram" exact={false}>
                  <ServerlessDiagram/>
              </Route>
              <Route path="/journal_mine" exact={false}>
                  <JournalMine/>
              </Route>
              <Route path="/musicdb" exact={true}>
                  <Search/>
              </Route>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
