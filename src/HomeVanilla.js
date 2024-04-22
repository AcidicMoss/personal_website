import React from 'react';
import './scss/HomeVanilla.scss';

const HomeVanilla = () => {
    return (
        <div className="container">
            <nav className="navbar">
                <a href="#home" className="navbar-brand">Navbar</a>
                <div className="nav">
                    <a href="#home" className="nav-link"><button className="btn btn-primary">Home</button></a>
                    <a href="#features" className="nav-link"><button className="btn btn-success">Features</button></a>
                    <a href="#pricing" className="nav-link"><button className="btn btn-danger">Pricing</button></a>
                </div>
            </nav>
            <div className="row">
                <div className="col">Content goes here...</div>
            </div>
        </div>
    )
}

export default HomeVanilla;