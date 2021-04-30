import axios from 'axios'
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
  const [user, setUser] = useState('')

  const getUser = async () => {
    const userId = localStorage.getItem('userId')
    try {
      let user = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/getInfo` ,{
      headers:{
        authorization: userId
      }
    })
    if(user.data.user) {
      setUser(user.data)  
    }
    } catch (error) {
      console.log(error)
    }
    
  }

  useEffect(() => {
    getUser()
  },[])

  return (
    <div className="App">
      <header className="App-header">NASA Image</header>
      <Navbar />
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/profile">
        <Profile user={user} setUser={setUser}/>
      </Route>
      <Route exact path="/login">
      {user ? 
        <Redirect to="/profile" />
        :
          <Login user={user} setUser={setUser}/>
        }
      </Route>
      <Route exact path="/signup">
        <Signup user={user} setUser={setUser}/>
      </Route>

    </div>
  );
}

export default App;
