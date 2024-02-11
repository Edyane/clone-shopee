import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';
import Cadastro from './routes/cadastro/cadastro';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cadastro" element={<Cadastro />} />
      </Routes>
    </div>
  );
}

export default App;

