import React, { useReducer, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import clienteAxiosHeroes from '../../config/axiosHeroes';

import { AGREGAR_HEROE, ELIMINAR_HEROE, LIMPIAR_HEROES } from '../../types';

import AuthContext from '../../context/autenticacion/authContext';
import HeroeContext from './heroeContext';
import HeroeReducer from './heroeReducer';

    
const HeroeSteate = props => {
    const initialState = {
        heroes: [],
    };
    //Dispatch y State
    const [state, dispatch] = useReducer(HeroeReducer, initialState);

    const authContext = useContext(AuthContext);
    const { token, usuarioAutenticado } = authContext;
    

    //Resultados iniciales héroes
    
    useEffect(() => {
        if(token || usuarioAutenticado ) {
            const hereosInicio = async () => {
                const ids = ['644', '346', '107', '309', '321', '680'];
                for(let i = 0; i < 6 ; i++){
                    try {
                        const heroes = await clienteAxiosHeroes.get(`2979903088905553/"${ids[i]}"`);
                            dispatch ({
                                type: AGREGAR_HEROE,
                                payload: heroes.data
                            })
                    } catch (error) {
                        console.log(error);
                    } 
                };
            };
            hereosInicio();
        }; 
    }, [token, usuarioAutenticado]);


    
    //Agregar héroe
    const agregarHeroe = heroes => {
        if(state.heroes.length >= 6){
            console.log('error');
            Swal.fire({
                icon: 'error',
                title: 'Ups',
                text: 'Tu equipo ya cuenta con el máximo (6) de héroes permitidos.'
            });
        } else {
            dispatch ({
                type: AGREGAR_HEROE,
                payload: heroes
            });
            Swal.fire(
                '¡Muy Bien!',
                'Se agregó el héroe a tu equipo.',
                'success'
            );
        };
    };

    //Eliminar Héroe
    const eliminarHeroe = heroes => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success m-1',
              cancelButton: 'btn btn-danger m-1'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: '¿Estas seguro?',
            text: "¿Seguro que quieres borrar al héroe seleccionado?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '¡Si, borrar!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Listo',
                'El héroe ha sido eliminado.',
                'success'
              )
              dispatch({
                type: ELIMINAR_HEROE,
                payload: heroes
            })
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'OK',
                'El héroe continúa siendo parte de tu equipo.',
                'error'
              )
            }
          })
    };

    //Limpiar Heroes
    const limpiarHeroes = () => {
        if(!token){
            dispatch({
                type: LIMPIAR_HEROES
            });
        } else {    
            return;    
        };
    }

    return (
        <HeroeContext.Provider
            value={{
                heroes: state.heroes,
                agregarHeroe,
                eliminarHeroe,
                limpiarHeroes
            }}
        >
            {props.children}
        </HeroeContext.Provider>
    )
}

export default HeroeSteate;