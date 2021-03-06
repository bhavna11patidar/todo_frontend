import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './Component/Header';
import Add from './Component/Add';
import View from './Component/View';
import {Provider} from './Component/Context';
import Edit from "./Component/Edit";
function App() {
  return (
    <Router>
      <Provider>
        <Route path='/' component={Header}></Route>
        <Route path='/add-list' component={Add}></Route>
        <Route path='/view-list' component={View}></Route>
        <Route path='/edit/:id' component={Edit}></Route>
      </Provider>
    </Router>
  );
}
export default App;
