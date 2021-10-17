import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './router'
import Header from './components/header/header'
import { Provider } from 'react-redux';
import store from './store';


import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
    );
}

export default App;
