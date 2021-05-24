import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';


export const LoginScreen = ( props ) => {

    //Extraer valores del context
    const authContext = useContext(AuthContext);
    const { iniciarSesion, autenticado, mensaje } = authContext;

    // //Usuario autenticado
    useEffect(() => {   
        if( autenticado ) {
            props.history.replace('/heroes');
        }
    }, [  autenticado, props.history ]);


    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Ingrese un email valido").required("El email es obligatorio"),
            password: Yup.string().required("La contraseña es obligatoria"),
        }),
        onSubmit: ( usuario ) => {
            const { email, password } = usuario;
            iniciarSesion({ email, password });
        }
    });


    return (
        <div className="container-sm">
            <div className="row justify-content-center m-2">
                <form 
                    className="form-group text-center p-3 formulario" style={{maxWidth: 500, margin: 200}}
                    onSubmit={formik.handleSubmit}    
                >
                    <h3>Iniciar Sesión:</h3>
                    {mensaje ? <p className="form-error animate__animated animate__bounce">{mensaje.mensaje}</p> : null}
                    <div className="mb-3">
                        <label className="form-label label" name="email">Email:</label>
                        <input 
                            className="form-control" 
                            type="text"
                            name="email" 
                            placeholder="Ingrese su email"
                            onChange={formik.handleChange}
                        />
                        <p className="form-error animate__animated animate__bounce">{formik.errors.email}</p>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" name="password">Contraseña:</label>
                        <input 
                            className="form-control" 
                            type="password" 
                            name="password"
                            id="password"
                            placeholder="Ingrese su contraseña"
                            onChange={formik.handleChange}
                        />
                        <p className="form-error">{formik.errors.password}</p>
                    </div>
                    <button type="submit" className="btn btn-danger btn-lg">Ingresar</button>
                </form>
            </div>    
        </div>
    )
}