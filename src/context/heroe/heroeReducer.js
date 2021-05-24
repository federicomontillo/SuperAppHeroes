import { AGREGAR_HEROE, ELIMINAR_HEROE } from '../../types';

const heroeReducer = (state, action) => {
    switch(action.type) {
        case AGREGAR_HEROE:
            return{
                ...state,
                heroes: [ action.payload, ...state.heroes ],
            }
            case ELIMINAR_HEROE:
                return {
                    ...state,
                    heroes: state.heroes.filter(heroe => heroe.id !== action.payload)
                }        
        default:
            return state;
    }
};

export default heroeReducer;