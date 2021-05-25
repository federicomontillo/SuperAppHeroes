import React from 'react';

import AuthState from './context/autenticacion/authState';
import HeroeSteate from './context/heroe/heroeState';

import { AppRouter } from './routers/AppRouter';

export const SuperApp = () => {
    
    return (
        <AuthState>
            <HeroeSteate>
                <AppRouter />
            </HeroeSteate>
        </AuthState>
    )
}
