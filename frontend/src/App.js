import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import About from './pages/About';

function App() {
  return (
    <div className="App">
    <ToastContainer />
    <BrowserRouter>
    <Header />
    
   
<Routes>
<Route>
<route exact path='/' element={<Home />} />
<route path='/add' element={<AddEdit />} />
<route path='/update/:id' element={<AddEdit />} />
<route path='/view/:id' element={<View />} />
<route path='/about' element={<About />} />

</Route>
</Routes>
 
  
    </BrowserRouter>
    </div>
  );
}



export default App;
