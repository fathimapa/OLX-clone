import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../Store/Context';
import { useNavigate , Link } from 'react-router-dom';


function Header() {
    const {user} = useContext(AuthContext)
    const {firebase} = useContext(FirebaseContext)
    const navigate = useNavigate()
    const HandleClick = () => {
        navigate('/create')
    }
    const HandleHome = () => {
        navigate('/')
    }
    return (
        <div className="headerParentDiv">
            <div className="headerChildDiv">
                <div onClick={HandleHome} className="brandName">
                    <OlxLogo></OlxLogo>
                </div>
                <div className="placeSearch">
                    <Search></Search>
                    <input type="text" />
                    <Arrow></Arrow>
                </div>
                <div className="productSearch">
                    <div className="input">
                        <input
                            type="text"
                            placeholder="Find car,mobile phone and more..."
                        />
                    </div>
                    <div className="searchAction">
                        <Search color="#ffffff"></Search>
                    </div>
                </div>
                <div className="language">
                    <span> ENGLISH </span>
                    <Arrow></Arrow>
                </div>
                <div className="loginPage">
                    <strong>
                    {!user && <Link to="/login">Login</Link>}
                    {user && `Welcome ${user.displayName}`}
                    {/* <Link to="/login">{user ? `Welcome ${user.displayName}` : 'Login'}</Link> */}
                        </strong>
                    <hr />
                </div>
                {user && <strong>
                <span onClick={()=>{
                    firebase.auth().signOut();
                    navigate('/login')
                }}>Logout</span>
                </strong>}
                <div onClick={HandleClick} className="sellMenu">
                    <SellButton ></SellButton>
                    <div className="sellMenuContent">
                        <SellButtonPlus></SellButtonPlus>
                        <span>SELL</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;