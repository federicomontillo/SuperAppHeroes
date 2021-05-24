import React from 'react';

export const PowerStats = ({heroes}) => {

    //PowerStats
    const inteligencia = heroes.map(heroe => parseInt((heroe.powerstats.intelligence)));
    const combate = heroes.map(heroe => parseInt((heroe.powerstats.combat)));
    const poder = heroes.map(heroe => parseInt((heroe.powerstats.power)));
    const velocidad = heroes.map(heroe => parseInt((heroe.powerstats.speed)));
    const fuerza = heroes.map(heroe => parseInt((heroe.powerstats.strength)));
    const resistencia = heroes.map(heroe => parseInt((heroe.powerstats.durability)));
    const peso = heroes.map(heroe => parseInt((heroe.appearance.weight[1])));
    const altura = heroes.map(heroe => parseInt((heroe.appearance.height[1])));

    //Peso Promedio
    let promedioPeso = 0;
    for(let i = 0; i < peso.length; i++){
        promedioPeso += peso[i] / heroes.length
    };
    //Altura Promedio
    let promedioAltura = 0;
    for(let i = 0; i < altura.length; i++){
        promedioAltura += altura[i] / heroes.length
    };

    //PowerStats
    let sumaInteligencia = 0;
    for(let i = 0; i < inteligencia.length; i++)
    {sumaInteligencia += inteligencia[i]
    };
    const inteligenciaTotal = {
        Nombre: 'Inteligencia: ', 
        valor: sumaInteligencia
    };

    let sumaCombate = 0;
    for(let i = 0; i < combate.length; i++)
    {sumaCombate += combate[i]
    };
    const combateTotal = {
        Nombre: 'Combate: ', 
        valor: sumaCombate
    };

    let sumaPoder = 0;
    for(let i = 0; i < poder.length; i++){
        sumaPoder += poder[i]
    };
    const poderteTotal = {
        Nombre: 'Poder: ', 
        valor: sumaPoder
    };

    let sumaVelocidad = 0;
    for(let i = 0; i < velocidad.length; i++){
        sumaVelocidad += velocidad[i]
    };
    const velocidadTotal = {
        Nombre: 'Velocidad: ', 
        valor: sumaVelocidad
    };

    let sumaFuerza = 0;
    for(let i = 0; i < fuerza.length; i++){
        sumaFuerza += fuerza[i]
    };
    const fuerzaTotal = {
        Nombre: 'Fuerza: ', 
        valor: sumaFuerza
    };

    let sumaResistencia = 0;
    for(let i = 0; i < resistencia.length; i++){
        sumaResistencia += resistencia[i]
    };
    const resistenciaTotal = {
        Nombre: 'Resistencia : ', 
        valor: sumaResistencia
    };

    //Ordena de - a + Powerstats
    const powerstats = [ inteligenciaTotal, combateTotal, poderteTotal, velocidadTotal, fuerzaTotal, resistenciaTotal ];
    const powerstatsOrdenados = powerstats.sort((ps1, ps2 ) => {
        return ps2.valor - ps1.valor
    });
   
    return (
        <div className="powerstats">
            <h3>PowerStats</h3>
            <div className="contenedor-powerstats">   
                <div className="powerstats-1">
                    <ul>
                        <li>{powerstatsOrdenados[0].Nombre}<span>{powerstatsOrdenados[0].valor} </span></li>
                        <li>{powerstatsOrdenados[1].Nombre}<span>{powerstatsOrdenados[1].valor}</span></li>
                        <li>{powerstatsOrdenados[2].Nombre}<span>{powerstatsOrdenados[2].valor}</span></li>
                        <li>{powerstatsOrdenados[3].Nombre}<span>{powerstatsOrdenados[3].valor}</span></li>
                        <li>{powerstatsOrdenados[4].Nombre}<span>{powerstatsOrdenados[4].valor}</span></li>
                        <li>{powerstatsOrdenados[5].Nombre}<span>{powerstatsOrdenados[5].valor}</span></li> 
                    </ul>
                </div>
                <div className="powerstats-1">
                    <ul>
                        <li>Peso promedio: <span>{promedioPeso.toFixed(1)} Kg.</span><i className="fas fa-star"></i></li>
                        <li>Altura Promedio: <span>{promedioAltura.toFixed(1)} Cm.</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
