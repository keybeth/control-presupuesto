import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({agregarGasto, restante}) => {
    const inicialGasto = {
        nombre: '',
        cantidad: 0
    };
    const [gasto, setGasto] = useState({...inicialGasto});
    const [error, setError] = useState(false);
    const {nombre, cantidad} = gasto;
    const handleChange = e => {
        setGasto({
            ...gasto,
            [e.target.name] : e.target.value 
        });
    };
    const guardaGasto = e => {
        e.preventDefault();
        if(nombre.trim() === ''  || isNaN(cantidad) || cantidad <= 0 || parseInt(cantidad) > restante) {
            setError(true);
            return;
        }
        setError(false);
        agregarGasto({
            ...gasto,
            cantidad: parseInt(cantidad),
            id: shortid.generate()
        });
        setGasto({...inicialGasto});
    };
    return ( 
        <form onSubmit={guardaGasto}>
            <h2>Agrega tus gastos aqui</h2>
            <Error mostrar={error} mensaje="Ambos campos son obligatorios o presupuesto incorrecto."/>
            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    name="nombre"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={handleChange}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    name="cantidad"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={handleChange}
                />
            </div>
            <button
                type="submit"
                className="u-full-width button-primary"
            >Agregar Gasto</button>
        </form>
     );
}

Formulario.propTypes = {
    agregarGasto: PropTypes.func.isRequired,
    restante: PropTypes.number.isRequired
};
 
export default Formulario;