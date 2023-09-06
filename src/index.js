import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Navebar from './share/Navebar';
import Landingpage from './components/Landingpage';
import About from './components/About';
import Service from './components/Service'
import Errorpage from './components/Errorpage'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navebar/>
      <Routes >
          <Route path=''  element={<Landingpage/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='service' element={<Service/>}/>
          <Route path='*' element={<Errorpage/>}/> 
          
        </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);

