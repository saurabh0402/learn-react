import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import './css/all.css';
import App from './components/app';
import Store from './store/store-factory';

let store = Store();

const render = () => {
    ReactDOM.render(<App store={store} />, document.getElementById('react-container'));
};

store.subscribe(render);
render();