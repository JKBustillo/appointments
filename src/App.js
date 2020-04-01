import React, { Fragment } from 'react';
import Form from './components/Form';

function App() {
  return (
    <Fragment>
      <h1>Administrador de citas</h1>
      <div className="container">
        <div className="one-half column">
          <Form />
        </div>
        <div className="one-half column">
          <h1>Ajá, cachón.</h1>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
