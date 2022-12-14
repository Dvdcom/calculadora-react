import React from 'react';

const Boton = (props) => {

    return (
        <div className={'div' + (props.index + 1)}>
            <button type="button" className="btn">{props.data}</button>
        </div>
    );
};

export default Boton;