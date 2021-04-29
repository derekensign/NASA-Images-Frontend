import {useState} from 'react'

const Signup = (props) => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSignupSubmit = async(e) => {
        e.preventDefault()
    } 
    
    return (
        <>

        </>
    )
}

export default Signup


