import React from 'react';
import { Route, Switch } from 'react-router';

import { Navbar } from '../components/ui/Navbar';
import { Buscador } from '../components/Buscador';
import { EquipoHeroes } from '../components/EquipoHeroes';


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-3">
                <Switch>
                    <Route exact path="/heroes" component={EquipoHeroes} />
                    <Route exact path="/buscador" component={Buscador} />
                </Switch>
            </div>
        </>
    )
}
