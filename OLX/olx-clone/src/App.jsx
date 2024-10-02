import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost';
import Post from './Store/PostContext';
import { AuthContext, FirebaseContext } from './Store/Context';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(() =>{
    firebase.auth().onAuthStateChanged((user) =>{
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
      <Router>
        <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/view' element={<View />} />
        </Routes>
      </Router>
      </Post>
    </div>
  );
}

export default App;