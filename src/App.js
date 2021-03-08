import React,{useEffect,useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/login/login';
import Main from "./components/main/index";

function App() {
  const [loggedIn,setIsLoggedIn ] = useState(false);
  useEffect(() => {
   if(localStorage.getItem('isLoggedIn')){
    setIsLoggedIn(true)
   }
  }, [])
  return (
    <div>
      {!loggedIn && <Login/>}
      {loggedIn && <Main/>}
    </div>
  )
}

export default App
