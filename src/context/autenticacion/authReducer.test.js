import authReducer from "./authReducer";

describe('Test en authReducer', () => {

    test('retorna el estado por defecto', () => {
        const state = authReducer({ autenticado: null }, {});
        expect( state ).toEqual({ autenticado: null });
    }); 

});
