import { LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION, CAMBIAR_PANTALLA, CAMBIAR_PANTALLA_BUSCAR } from '../../types';

const authReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('usuarioAutenticado', true);
            return {
                ...state,
                autenticado: true,
                usuarioAutenticado: true
            }
        case LOGIN_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        case CERRAR_SESION:
            localStorage.removeItem('token');
            localStorage.removeItem('usuarioAutenticado', true);
            return {
                ...state,
                token: null,
                autenticado: null,
                usuarioAutenticado: null
            }
        case CAMBIAR_PANTALLA:
            return{
                ...state,
                pantalla: true
            }

        case CAMBIAR_PANTALLA_BUSCAR:
            return{
                ...state,
                pantalla: false
            }
        default:
            return state;
    }
}

export default authReducer;