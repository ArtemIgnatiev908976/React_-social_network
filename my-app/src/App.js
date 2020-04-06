import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/NavBar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter,Route} from "react-router-dom";
import {addPost} from "./redux/store";
import MyPosts from "./components/Profile/MyPosts/MyPosts";

const App = (props) => {



    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Route path={'/dialogs'} render={ () => <Dialogs store={props.store} />}/>
                    <Route path={'/profile'} render={ () => <Profile store={props.store}/>}/>

                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
