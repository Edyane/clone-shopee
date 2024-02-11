import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/cadastro">Página de Cadastro</Link>
        </div>
    )
};

export default Home;
