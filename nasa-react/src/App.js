
import './App.css';
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import {useEffect, useState} from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">NASA Image</header>
      <Navbar />
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>

    </div>
  );
}

export default App;
