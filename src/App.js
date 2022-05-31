import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "./Components/Home/Movies";
import LoginScreen from "./Components//Login/LoginScreen";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { auth } from "./Firebase";
import { login, logout, selectUser } from "./Components/features/userSlice";
import Profile from "./Components/Profile/Profile";
import Search from "./Components/Search/Search";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Routes>
          
            <React.Fragment>
              <Route exact path="/" element={<Movies />}></Route>
              <Route path="/search" element={<Search />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </React.Fragment>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
