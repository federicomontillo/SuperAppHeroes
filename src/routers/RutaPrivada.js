import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../context/autenticacion/authContext';

const RutaPrivada = ({ component: Component, ...props }) => {

    const authContext = useContext(AuthContext);
    const { usuarioAutenticado }= authContext;

    return (
        <Route { ...props } render={ props => !usuarioAutenticado ? (
            <Redirect to="/login" />
        ) : (
            <Component {...props} />
        ) } />
    )
}

export default RutaPrivada;
