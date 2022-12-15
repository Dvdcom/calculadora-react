import React from 'react';
import Boton from './Boton'

import {caracteres} from '../aplicacion/Caracteres'
import {caracteresSimples} from '../aplicacion/Caracteres'

const Botones = () => {
    return (
        <>
        <div className="botones">
            {caracteres.map((element,index) => 
                <Boton data={element} key={index} index={index}/>
            )}
        </div>
        <div className="version-mobile">
            <div className="botones-mobile">
            {caracteresSimples.map((element,index) => 
                <Boton data={element} key={index} index={index}/>
            )}
            </div>
        </div>
        </>
    );
};

export default Botones;