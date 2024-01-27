import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Authentication from './Authentication/Authentication';
import Homepage from './Homepage';
import { useEffect } from 'react';
import { auth } from './Firebase';
import { loginUser, setLoading } from './Feature/UserSlice';
import Home from './Home';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser){
          dispatch(loginUser({
           uid: authUser.uid,
           username: authUser.displayName,
           email: authUser.email,
          })
          );
          dispatch(setLoading(false));
      }else {
       console.log("user is not logged in");
      }
    });
  }, []);
  const user = useSelector(state => state.data.user.user);
  console.log(auth.currentUser);
  return (
    <div className="app">
      
      {user ? ( <Home />) : (<Authentication />)}
    
     </div>
  );
}

export default App;
