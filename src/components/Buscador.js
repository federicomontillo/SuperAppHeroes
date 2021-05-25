import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import clienteAxiosHeroes from '../config/axiosHeroes';
import { HeroeCard } from './heroe/HeroeCard';

export const Buscador = () => {

    const [busqueda, setBusqueda] = useState([]);
    const  { results }  = busqueda;
    
    const formik = useFormik({
        initialValues: {
            heroe: "",
        },
        validationSchema: Yup.object({
            heroe: Yup.string().required("El campo es obligatorio"),
        }),
        onSubmit: async ( heroe ) => {
            try {
                const busqueda = await clienteAxiosHeroes.get(`2979903088905553/search/${heroe.heroe}`);
                setBusqueda(busqueda.data);
                    } catch (error) {
                        console.log(error);
                }
        }
    });

    return (
        <>  
        <div className="container-sm">
            <div className="row justify-content-center m-2">
                <form 
                    className="form-group text-center formulario p-5" style={{maxWidth: 500, margin: 20, borderRadius: 10}}
                    onSubmit={formik.handleSubmit}    
                >
                    <h3>Buscar Héroe:</h3>
                    <div className="mb-3">
                        <label className="form-label" name="heroe">Ingrese un Héroe</label>
                        <input 
                            className="form-control" 
                            type="text"
                            name="heroe" 
                            placeholder="Ingrese un Heroe"
                            onChange={formik.handleChange}
                        />
                        <p className="form-error">{formik.errors.heroe}</p>
                    </div>
                    <button type="submit" className="btn btn-danger btn-lg">Buscar</button>
                </form>
            </div>    
        </div>

        
        <div>
        <h2>Búsqueda de Héroes:</h2>
            <ul className="contenedor-heroes">
                {!results
                    ? (<li><p>Realice una búsqueda...</p></li>)
                    : (results.map(heroe => (
                            <HeroeCard
                                key={heroe.id}
                                heroe={heroe}
                            />
                        )
                    ))
                }
                
            </ul>
        </div>
    </>
    )
}
