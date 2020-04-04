import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/NavBar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter,Route} from "react-router-dom";
import {addPost} from "./redux/state";
import MyPosts from "./components/Profile/MyPosts/MyPosts";

const App = (props) => {



    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Route path={'/dialogs'} render={ () => <Dialogs state={props.state.dialogsPage} />}/>
                    <Route path={'/profile'} render={ () =>
                        <Profile profilePage={props.state.profilePage}
                                 dispatch={props.dispatch}

                        />}/>

                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
