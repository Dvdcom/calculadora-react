import React from 'react';
import Botones from './Botones'
import Visor from './Visor';

const Main = () => {
    return (
        <div className="container-fluid w-100 h-100 d-flex justify-content-center align-items-center p-0 m-0">
            <div className="container col-auto" id='ContenedorCalculadora'>
                <Visor/>
                <Botones/>
            </div> 
        </div>

    );
};

export default Main;