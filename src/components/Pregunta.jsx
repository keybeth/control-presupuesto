import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropType from 'prop-types';

const Pregunta = ({setPresupuesto, setRestante}) => {
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);
    const guardarPresupuesto = e => {
        e.preventDefault();
        if (isNaN(cantidad) || cantidad <= 0) {
            setError(true);
            return;
        }
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setCantidad(0);
    };
    const handleChange = e => setCantidad(parseInt(e.target.value || 0));
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            <Error mostrar={error} mensaje="El presupuesto es incorrecto."/>
            <form onSubmit={guardarPresupuesto}>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    value={cantidad}
                    onChange={handleChange}
                />
                <input 
                    type="submit"
                    className="u-full-width button-primary"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment> 
    );
}

Pregunta.propTypes = {
    setPresupuesto: PropType.func.isRequired, 
    setRestante:PropType.func.isRequired
};

export default Pregunta;