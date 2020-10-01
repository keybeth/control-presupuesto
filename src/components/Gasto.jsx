import React from 'react';
import PropTypes from 'prop-types';

const Gasto = ({gasto}) => (
    <p>
        {gasto.nombre}
        <span className="gasto">$ {gasto.cantidad}</span>
    </p> 
);

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
};
 
export default Gasto;