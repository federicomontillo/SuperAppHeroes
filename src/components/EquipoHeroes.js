import React, { useContext } from 'react';

import { PowerStats } from './PowerStats';
import { HeroeCard } from '../components/heroe/HeroeCard';

import HeroeContext from '../context/heroe/heroeContext';

export const EquipoHeroes = () => {

    const heroeContext = useContext(HeroeContext);
    const { heroes } = heroeContext;

    return (
        <>  
        <div>
        <h2>Equipo de Héroes:</h2>
        <PowerStats 
            heroes={heroes}
        />
            <div>
                <ul className="contenedor-heroes">
                    {!heroes
                        ? (<p>Realice una búsqueda...</p>)
                        : (heroes.map(heroe => (
                                <HeroeCard
                                    key={heroe.id}
                                    heroe={heroe}
                                />
                            )
                        ))
                    }
                    
                </ul>
            </div>
        </div>
    </>
    )
}
