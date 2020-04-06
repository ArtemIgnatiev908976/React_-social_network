import store from "./redux/redux-store";

import {Provider} from "./StoreContext"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";


// addPost('hey');
let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree();

store.subscribe(() => {

    rerenderEntireTree();


});

