import React, { useEffect, useState } from 'react';
import ControlPresupuesto from './components/ControlPresupuesto';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Pregunta from './components/Pregunta';

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [gastos, setGastos] = useState([]);
  const agregarGasto = gasto => setGastos([...gastos, gasto]);
  const eliminarGasto =  gasto => setGastos(gastos.filter(g => g.id !== gasto.id));

  useEffect(() => setRestante(
    gastos.reduce((acum, gasto) => acum - gasto.cantidad, presupuesto)), 
    [gastos, presupuesto]
  );

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <div className="contenido-principal contenido">
        {presupuesto === 0
        ? 
          <Pregunta 
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
          />
        :
          <div className="row">
            <div className="one-half column">
              <Formulario
                restante={restante}
                agregarGasto={agregarGasto}
              />
            </div>
            <div className="one-half column">
              <Listado 
                gastos={gastos}
                eliminarGasto={eliminarGasto}
              />
              <ControlPresupuesto 
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
