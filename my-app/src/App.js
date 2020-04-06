import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/NavBar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter,Route} from "react-router-dom";
import {addPost} from "./redux/store";
import MyPosts from "./components/Profile/MyPosts/MyPosts";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {



    return (

            <div className='app-wrapper'>

                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Route path={'/dialogs'} render={ () => <DialogsContainer  />}/>
                    <Route path={'/profile'} render={ () => <Profile />}/>

                </div>

            </div>

    );
}


export default App;
