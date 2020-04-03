import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/NavBar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Technologies from './Technologies.js';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter,Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Route path={'/dialogs'} render={ () => <Dialogs/>}/>
                    <Route path={'/profile'} render={ () => <Profile/>}/>

                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
