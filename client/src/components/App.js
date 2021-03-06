
import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Login from './LoginModal/Login';

import Signup from './LoginModal/Signup';
import Coderprofile from "./Coderprofile";
import Lesson from "./Lesson";
import Dashboard from './Dashboard';
import Footer from "./Footer";

function App() {

   const [user, setUser] = useState(null)

   const [isLoading,setLoading] = useState(true)

   useEffect(() => {

   fetch("http://localhost:4000/authorized_coder")
   .then(res => {
      if (res.ok) {
         res.json()
         .then(coder => {
         setUser(coder)
         })
      }
      setLoading(false);
   })
   }, [])


  // if (!isAuthenticated) return <Login error={'Please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />

  if (isLoading) {
     return (
     <div id="preloder">
        <div className="loader"></div>
      </div>
      )
   }
   
   return (
   <div>
      <Navigation setUser={setUser} user={user} />
      <Routes>
      
      <Route path="/profile/:name" element={
         <Coderprofile />
      } />
      <Route path="/lessons/:id" element={
         <Lesson user={user} />
      } /> 
      <Route path="/dashboard" element={
         <Dashboard user={user}/>
      } />
      <Route path="/login" element={
         <Login setUser={setUser} />
      } />

      <Route path="/signup" element={
         <Signup/>
      } />
      
      </Routes>
      <Footer />
   </div>
  );
}

export default App;