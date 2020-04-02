import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({ cita, eliminarCita }) => {

    const { id, mascota, propietario, fecha, hora, sintomas } = cita;
    return ( 
        <div className="cita">
            <p>Mascota: <span>{mascota}</span> </p>
            <p>Dueño: <span>{propietario}</span> </p>
            <p>Fecha: <span>{fecha}</span> </p>
            <p>Hora: <span>{hora}</span> </p>
            <p>Síntomas: <span>{sintomas}</span> </p>

            <button
                className="button eliminar u-full-width"
                onClick={() => eliminarCita(id)}
            >Eliminar &times;</button>
        </div>
    );
}

Cita.propTypes = {
    id: PropTypes.number,
    mascota: PropTypes.string,
    propietario: PropTypes.string,
    fecha: PropTypes.string,
    hora: PropTypes.string,
    sintomas: PropTypes.string,
}
 
export default Cita;