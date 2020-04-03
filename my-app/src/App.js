import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/NavBar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter,Route} from "react-router-dom";

const App = (props) => {



    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Route path={'/dialogs'} render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages} />}/>
                    <Route path={'/profile'} render={ () => <Profile posts={props.posts} />}/>

                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
