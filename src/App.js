
import './App.css';
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import SearchBar from './Componentes/SearchBar'
import Catalogo from './Componentes/Catalogo'
import React, { Component }  from 'react';


const initialValue = { items: [] }

const reducer = (state = initialValue, action) => {
  switch(action.type){
    case "SEARCH" : 
    return { ...state, items: [ ...state.items, action.payload ] }
     default:
      return state
  }
}


const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);


function App() {

  return (
    
    <Provider store={store}>
      <div className = "App">
      <SearchBar/>
      <Catalogo/>
      </div>
    </Provider>
      
  );
}

export default App;
