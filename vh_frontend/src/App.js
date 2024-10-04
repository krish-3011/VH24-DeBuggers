import React from 'react';
import FirstPage from './dashboard/First';
import Stats from './Stats/Stats1'
import Profile from './profile/profile';
import Redeem from './redeem/Redeem';


import {
  
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

const App = () => (
<BrowserRouter>
<Routes>
  <Route exact path="/" element={<FirstPage />} />
  <Route exact path="dashboard" element={<FirstPage />} />
  <Route exact path="stats" element={<Stats />} />
  <Route exact path="profile" element={<Profile />} />
  <Route exact path="redeem" element={<Redeem />} />

  
 
</Routes>
</BrowserRouter>
);
export default App;