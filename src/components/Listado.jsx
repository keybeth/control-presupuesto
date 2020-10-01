import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const Listado = ({gastos, eliminarGasto}) => ( 
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {gastos.map(gasto =>
            
            <li 
                key={gasto.id}
                className="gastos" >
                <Gasto
                    gasto={gasto}
                />                
                <button
                    type="button"
                    className="u-full-width button-danger"
                    onClick={() => eliminarGasto(gasto)}
                >Eliminar &times;</button>
            </li>
        )}
    </div> 
);

Listado.propTypes = {
    gastos: PropTypes.array.isRequired,
    eliminarGasto: PropTypes.func.isRequired
};
 
export default Listado;