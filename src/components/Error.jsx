import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Error = ({mostrar, mensaje}) => ( 
    <Fragment>
    {mostrar
    ? <p className="alert alert-danger error">{mensaje}</p>
    : null
    }
    </Fragment>
);

Error.propTypes = {
    mostrar: PropTypes.bool,
    mensaje: PropTypes.string.isRequired
};
 
export default Error;