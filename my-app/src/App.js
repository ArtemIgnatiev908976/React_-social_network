import React from 'react';
import './App.css';
import Header from './Header.js';
import Technologies from './Technologies.js';
import Footer from './Footer.js';

const App = () => {
    return (
        <div className='app-wrapper'>
        <header className='header'>


        </header>
        <nav className='nav'>
          <div><a>Profile</a></div>
          <div><a>Messages</a></div>
          <div><a>News</a></div>
          <div><a>Music</a></div>
          <div><a>Settings</a></div>
        </nav>
        <div className='content'>Main content
        <img src="https://miro.medium.com/max/2400/1*d6l-K0K-4U8ROEXG9_Ox7Q.png" />

        <div><a>desc+ava</a></div>
        <div><a>my posts</a></div>
        <div><a>New posts</a></div>
        <div><a>posts1</a></div>
        <div><a>posts2</a></div>

        </div>


        </div>
    );
}


export default App;
