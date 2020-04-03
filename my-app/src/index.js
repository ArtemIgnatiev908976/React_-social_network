import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'hi my first post', likesCount: 12},
    {id: 2, message: 'hi my second post', likesCount: 222},
    {id: 3, message: 'hi my second post222', likesCount: 22222},

]

let dialogs = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Artem'},
    {id: 3, name: 'Ivan'},
    {id: 4, name: 'Lena'},
    {id: 5, name: 'Vova'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Who are you?'},
    {id: 3, message: 'My name is ivan'},
    {id: 4, message: 'Do you love vodka?'},
    {id: 5, message: 'Yes'}
]




ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
