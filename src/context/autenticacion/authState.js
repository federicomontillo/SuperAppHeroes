import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import { LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION, CAMBIAR_PANTALLA, CAMBIAR_PANTALLA_BUSCAR } from '../../types';
import clienteAxios from '../../config/axios';


const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        usuarioAutenticado: localStorage.getItem('usuarioAutenticado'),
        autenticado: null,
        mensaje: null,
        pantalla: true
    }


    const [ state, dispatch ] = useReducer( AuthReducer, initialState );

    //Cuando el usuario inicia sesión

    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post(' ', datos);
            
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            });
        } catch (error) {
            const alerta = {
                mensaje: error.response.data.error
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }     
    }

    //Cerrar sesión del usuario
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION,
        });
    }

    const cambiarPantalla = () => {
        dispatch({
            type: CAMBIAR_PANTALLA
        })
    }
    const cambiarPantallaBuscar = () => {
        dispatch({
            type: CAMBIAR_PANTALLA_BUSCAR
        })
    }


    return(
        <AuthContext.Provider 
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                pantalla: state.pantalla,
                usuarioAutenticado: state.usuarioAutenticado,
                iniciarSesion,
                cerrarSesion,
                cambiarPantalla,
                cambiarPantallaBuscar
            }}
        >{props.children}

        </AuthContext.Provider>
    )
}

export default AuthState;