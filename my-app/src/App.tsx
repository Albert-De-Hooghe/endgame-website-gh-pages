import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import Pawns from './pawns';
import Root from './routes/root';

function App() {

  const navigate = useNavigate();
  return (
    <>
   <button onClick={() => navigate('/')}>Home</button>
   <button onClick={() => navigate('/about')}>About</button>
   <Routes>
     <Route path="/" element={ <Root/> } />
     <Route path="/about" element={ <div>about</div> } />
   </Routes>
</>
    
    /*
    <HashRouter>
      <Root></Root>
      
      <Routes>

        
        <Route path="/pawns" element={<Pawns></Pawns>} />

        <Route path="/knights-vs-pawns" element={<div>a venir</div>} />
        <Route path="/knights" element={<div>a venir</div>} />
        <Route path="/bishop-vs-pawns" element={<div>a venir</div>} />
        
      </Routes>
    </HashRouter>*/
  );
}

export default App;
