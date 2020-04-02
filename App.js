import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './screens/Home/Home';
import AboutUs from './screens/AboutUs/AboutUs';
import ServicesScreen from './screens/ServicesScreen/ServicesScreen';
import PortFolio from './screens/portfolioscreens/portfolioscreens';
import ContactScreen from './screens/ContactScreen/ContactScreen';
import Header from './components/Header/Header/Header';



function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={AboutUs} />
            <Route path="/services" component={ServicesScreen} />
            <Route path="/portfolio" component={PortFolio} />
            <Route path="/contact" component={ContactScreen} />
          </Switch>
  
      </div>
    </Router>
  );
}

export default App;
