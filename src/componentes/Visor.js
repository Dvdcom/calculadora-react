import React from 'react';
import { useMostrarValor } from '../aplicacion/UserProvider';

const Visor = () => {

    const valor = useMostrarValor();

    return (
        <div className="resultado mb-3">
        <div id="marca">CASIO</div>
        <label className="form-control mt-3" type='text' name="in-resultado" id="in-resultado" placeholder='Su resultado es...'>{valor}</label>
    </div>
    );
};

export default Visor;