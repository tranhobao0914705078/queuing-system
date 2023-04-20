import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getDatabase, ref, child, get } from "firebase/database";
import { database } from './firebase';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import './Styles/sb-admin-2.min.css'
import { Login } from 'Pages/Account';
import { Admin } from 'Pages/Admin/Admin';
import { PrivateRoute } from './Components';

function App() {
  const dbRef = ref(database);
  get(child(dbRef, `users/1`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  
  return (
    <div className='App' id="wrapper">
       <Router>
          <Routes>
            <Route path="/" element={<PrivateRoute><Login /></PrivateRoute>} />
            {/* <Route path="/admin" element={<Admin />} /> */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
