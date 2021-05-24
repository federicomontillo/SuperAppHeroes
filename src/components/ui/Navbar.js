import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';
import Logo from '../../assets/logopng.png';

export const Navbar = () => {

    //Extraer valores del context
    const authContext = useContext(AuthContext);
    const { cerrarSesion, cambiarPantalla, cambiarPantallaBuscar } = authContext;

    return (
        <nav className="navbar navbar-expand-sm navbar-dark nav-prop">
            <div className="container-fluid">
                    <Link 
                        className="navbar-brand brand" 
                        to="/heroes"
                    >
                        <img src={Logo} alt="logo super-app" width="40" height="40" className="d-inline-block align-text-top me-1"/>
                        Super-App
                    </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                            <NavLink 
                                activeClassName="active"
                                className="nav-item nav-link text-center pt-4" 
                                exact
                                to="/buscador"
                                onClick={ () => cambiarPantallaBuscar(false) }
                            >
                                Buscador
                            </NavLink>

                            <NavLink 
                                activeClassName="active"
                                className="nav-item nav-link text-center pt-4" 
                                exact
                                to="/heroes"
                                onClick={ () => cambiarPantalla(true) }
                            >
                                Héroes
                            </NavLink>

                            <NavLink 
                                activeClassName="active"
                                className="nav-item nav-link text-center p-4" 
                                exact
                                to="/login"
                                onClick={ () => cerrarSesion() }
                                >
                                Logout
                            </NavLink>  
                    </div>           
                </div>
            </div>
    </nav>
    )
}