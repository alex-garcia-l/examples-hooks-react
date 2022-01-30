import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  
} from "react-router-dom";

import { CounterWhitCustomHook } from './components/01-useState/CounterWhitCustomHook';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
import { Padre } from './components/07-tarea-memo/Padre';
import { TodoApp } from './components/08-useReducer/TodoApp';
import { NotFount } from './pages/NotFount';
import { ContextApp } from './components/09-useContext/ContextApp';

import { HomeScreen } from './components/09-useContext/HomeScreen';
import { ProfileScreen } from './components/09-useContext/ProfileScreen';
import { LoginScreen } from './components/09-useContext/LoginScreen';

import './app.css';

export const App = () => {
  return (
    <>

      <Router>
        <div>
          <div className="container mb-5">
            <header className="d-flex justify-content-center py-3">
              <ul className="nav nav-pills">
                <li className="nav-item"><NavLink className="nav-link" to="/">Todo App</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/counter">Counter</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/breaking-bad">Breaking Bad</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/counter-pro">Counter Pro</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/context-app">Contex App</NavLink></li>
              </ul>
            </header>
          </div>

          <Routes>
            <Route exact path="/" element={<TodoApp />} />
            <Route exact path="/counter" element={<CounterWhitCustomHook />} />
            <Route exact path="/breaking-bad" element={<MultipleCustomHooks />} />
            <Route exact path="/counter-pro" element={<Padre />} />
            <Route exact path="/context-app" element={<ContextApp />} >
              <Route exact index path='' element={<HomeScreen />} />
              <Route exact path='about' element={<ProfileScreen />} />
              <Route exact path='login' element={<LoginScreen />} />
            </Route>
            <Route path="*" element={<NotFount />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

