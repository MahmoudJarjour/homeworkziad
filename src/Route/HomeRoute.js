import React from "react";
import Social from "../Pages/SocialPage";
import Team from "../Pages/TeamPage";
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import HeaderPage from "../Pages/HeaderPage";
import Home from "../Pages/Home";
import PageNotFound from "../Pages/PageNotFound";




const HomePage=()=>{
    return (
    <>
    
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HeaderPage}></Route>
                <Route path='/Home' exact component={Home}></Route>
                <Route path='/social'  component={Social}></Route>
                <Route path='/Team' component={Team}></Route>
                <Route component={PageNotFound}></Route> 
                
                
            </Switch>
        </BrowserRouter>
    </>
    )
}

export default HomePage;