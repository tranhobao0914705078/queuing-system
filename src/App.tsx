import React, { useEffect } from 'react';
import './App.css';
import { getDatabase, ref, child, get } from "firebase/database";
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import './Styles/sb-admin-2.min.css'
import { Login } from 'Pages/Account';
import { Admin } from 'Pages/Admin/AdminPage/Admin';
import { PrivateRoute } from './Components';
import { AccountRoute } from 'Components/AccountRoute';
import { SendMail } from 'Pages/Account/SendMail/SendMail';
import { ResetPassword } from 'Pages/Account/ResetPassword/ResetPassword';

import { publicRoutes } from './Pages/routes';
import  DefaultLayout  from './Pages/Admin/DefaultLayout';
function App() {
  // const dbRef = ref(database);
  // get(child(dbRef, `Device`)).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val());
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });

  useEffect(() => {
    document.title = 'Queuing System';
  }, []);
  
  return (
    <div className='App' id="wrapper">
       <Router>
          <Routes>
            <Route path="/" element={<PrivateRoute><Login /></PrivateRoute>} />
            <Route path="/admin" element={<AccountRoute><Admin /></AccountRoute>} />
            <Route path="/send-mail" element={<SendMail />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            {/* layout admin */}
            {publicRoutes.map((route, index) => {
              const Layout = DefaultLayout;
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
            })}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
