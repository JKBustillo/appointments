import React, { Fragment, useState } from 'react';
import Form from './components/Form';

function App() {

  const [citas, setCitas] = useState([]);

  // Función que agrega una nueva cita
  const crearCita = cita => {
    setCitas([...citas, cita]);
  }
  
  return (
    <Fragment>
      <h1>Administrador de citas</h1>
      <div className="container">
        <div className="one-half column">
          <Form crearCita={crearCita} />
        </div>
        <div className="one-half column">
          <h1>Ajá, cachón.</h1>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
