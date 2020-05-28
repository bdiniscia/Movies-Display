import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import React from 'react';
import './App.sass';
import CarouselMedia from './Components/CarouselMedia';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import MediaDetails from './Components/MediaDetails'
import Contadores from './Components/Contadores'
import Theory from "./Components/Theory";


const App = () => {
  
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Switch>
            <Route exact path="/Contenidos" component={CarouselMedia} />
            <Route exact path="/" component={Home} />
            <Route path="/Contenidos/detalle/:id" component={MediaDetails} />
            <Route path="/Contadores" component={Contadores} />
            <Route path="/Teoria" component={Theory} />
          </Switch>
      </Router>    
      <Footer />
    </div>
  );
}

export default App;
