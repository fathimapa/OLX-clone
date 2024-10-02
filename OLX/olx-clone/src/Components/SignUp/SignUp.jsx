import React, { useContext, useState } from 'react';
import {useNavigate,Link} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './SignUp.css';
import { FirebaseContext } from '../../Store/Context';

export default function Signup() {
    const navigate = useNavigate()
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [password,setPassword] = useState('')
    const {firebase} = useContext(FirebaseContext)

    const HandleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email,password).then((result) =>{
            result.user.updateProfile({displayName:username}).then(()=>{
                firebase.firestore().collection('users').add({
                    id:result.user.uid,
                    username:username,
                    phone:phone
                }).then(()=>{
                    navigate('/Login')
                })
            })
        })
    }

    return (
        <div>
            <div className="signupParentDiv">
                <img className='logo' alt='logo' width="200px" height="200px" src={Logo}></img>
                <form onSubmit={HandleSubmit}>
                    <label htmlFor="fname">Username</label>
                    <br />
                    <input
                        className="input"
                        type="text"
                        id="fname"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        name="name"
                        defaultValue="John"
                    />
                    <br />
                    <label htmlFor="fname">Email</label>
                    <br />
                    <input
                        className="input"
                        type="email"
                        id="fname"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        defaultValue="John"
                    />
                    <br />
                    <label htmlFor="lname">Phone</label>
                    <br />
                    <input
                        className="input"
                        type="number"
                        id="lname"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        name="phone"
                        defaultValue="Doe"
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
                    <button>Signup</button>
                </form>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    );
}