import React, { useContext, useState } from 'react';
import HeroeContext from '../../context/heroe/heroeContext';
import AuthContext from '../../context/autenticacion/authContext'
import Swal from 'sweetalert2';
import  { Modal } from 'react-bootstrap';

export const HeroeCard = ({ heroe }) => {

    const authContext = useContext(AuthContext);
    const { pantalla } = authContext;

    const heroeContext = useContext(HeroeContext);
    const { agregarHeroe, eliminarHeroe, heroes } = heroeContext;
    const [show, setShow] = useState(false);

    //Extraer Powerstats
    const { powerstats } = heroe;
    const { combat, durability, intelligence, power, speed, strength} = powerstats;
    const totalPowerstats = ( parseInt(intelligence) 
                            + parseInt(combat)
                            + parseInt(power)
                            + parseInt(speed)
                            + parseInt(durability)
                            + parseInt(strength)
    );
    
    
    //Filtro según alineación
    const alineacion = heroes.map(heroe => (heroe.biography.alignment));
    const bad = alineacion.filter(bad => bad.length <= 3);
    const good = alineacion.filter(good => good.length > 3);

    const buenoMalo = () => {
        if(bad.length >= 3 && heroe.biography.alignment === 'bad') {
            Swal.fire({
                icon: 'error',
                title: 'Ups',
                text: 'Su equipo ya cuenta con demasiados (3) héroes MALOS.'
            });
        } else if(good.length >= 3 && heroe.biography.alignment === 'good') {
            Swal.fire({
                icon: 'error',
                title: 'Ups',
                text: 'Su equipo ya cuenta con demasiados (3) héroes BUENOS.'
            });
         } else {
            agregarHeroe(heroe);
        }
    };
    
    return (
        <>
        <div className="card mb-3 bg-heroe">
            <img src={ heroe.image.url } alt={heroe.name}/>
            <div className="card-body text-center">
                <h5 className="card-title">{heroe.name}</h5>
                <p className="card-text">PowerStats: <span>{totalPowerstats}</span></p>
                <div className="d-grid gap-2">
                    {pantalla 
                    ? 
                        <>
                            <button className="btn btn-secondary"
                                onClick={() => setShow(true)}
                                >+ INFO
                            </button>
                            <button className="btn btn-danger"
                                onClick={() => eliminarHeroe(heroe.id)}
                                >ELIMINAR
                            </button>
                        </>
                    : 
                        <button className="btn btn-success"
                            onClick={() => buenoMalo()}
                            >AGREGAR
                        </button>
                    }
                
                </div>
            </div>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
            <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
                {heroe.biography["full-name"]}
            </Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <ul>
                        <li>Alias: <span>{heroe.name}</span></li>
                        <li>Lugar de Trabajo: <span>{heroe.work.base}</span></li>
                        <li>Altura: <span>{heroe.appearance.height[1]}</span></li>
                        <li>Peso: <span>{heroe.appearance.weight[1]}</span></li>
                        <li>Color de Ojos: <span>{heroe.appearance["eye-color"]}</span></li>
                        <li>Color de Cabello: <span>{heroe.appearance["hair-color"]}</span></li>
                    </ul>
                </Modal.Body>
            </Modal>
        </div>
        </>
    )
}
