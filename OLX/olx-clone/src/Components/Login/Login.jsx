import React, { useContext, useState } from 'react';
import {FirebaseContext} from '../../Store/Context'
import { useNavigate ,Link } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Login.css';


function Login() {
    const [email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const {firebase} = useContext(FirebaseContext)
    const navigate = useNavigate()
    const HandleLogin = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
            navigate('/')
        }).catch((error) =>{
            alert(error.message)
        })
    }
    return (
        <div>
            <div className="loginParentDiv">
                <img alt='logo' className='logo' width="200px" height="200px" src={Logo}></img>
                <form onSubmit={HandleLogin}>
                    <label htmlFor="fname">Email</label>
                    <br />
                    <input
                        className="input"
                        type="email"
                        id="fname"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        name="email"
                        defaultValue="John"
                    />
                    <br />
                    <label htmlFor="lname">Password</label>
                    <br />
                    <input
                        className="input"
                        type="password"
                        id="lname"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        defaultValue="Doe"
                    />
                    <br />
                    <br />
                    <button>Login</button>
                </form>
                <Link to='/signup'>Signup</Link>
            </div>
        </div>
    );
}

export default Login;