
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Skills from './Skills'
import Project from './Project'
import HomePageComponent from './HomePageComponent';


const HeaderComponents = () => {
    return (
        <div className="">
            <BrowserRouter >
                <div className="nav-bar">
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/skills" component={Skills} />
                        <Route path="/project" component={Project} />
                        <Route path="/contact" component={Contact} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}
export default HeaderComponents;
