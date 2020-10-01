import React from 'react';

const Gasto = ({gasto}) => (
    <p>
        {gasto.nombre}
        <span className="gasto">$ {gasto.cantidad}</span>
    </p> 
);
 
export default Gasto;