import React from 'react';
import FirstPage from './dashboard/First';


import {
  
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

const App = () => (
<BrowserRouter>
<Routes>
  <Route path="/" element={<FirstPage />} />
</Routes>
</BrowserRouter>
);
export default App;