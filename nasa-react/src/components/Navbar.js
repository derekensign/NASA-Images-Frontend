import {useState} from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    const[user,setUser] = useState('')

    return (
        <>
            <ul>
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/signup">Signup</Link></li>
                <li><Link className="nav-link" to="/login">Login</Link></li>
                <li><Link className="nav-link" to="/profile">Profile</Link></li>
                <li><Link className="nav-link" to="/login">Logout</Link></li>


            </ul>
        
        
        </>
    )
}

export default Navbar
