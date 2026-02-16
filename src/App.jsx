import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Ejercicio1 from './pages/Ejercicio1';
import ModalForm1 from './components/ModalForm1';
import Ejercicio2 from './pages/Ejercicio2';
import Ejercicio3 from './pages/Ejercicio3';
import Ejercicio4 from './pages/Ejercicio4';
import Ejercicio5 from './pages/Ejercicio5';
import Ejercicio6 from './pages/Ejercicio6';
import Ejercicio7 from './pages/Ejercicio7';
import Ejercicio8 from './pages/Ejercicio8';
import Ejercicio9 from './pages/Ejercicio9';
import Ejercicio10 from './pages/Ejercicio10';

function App() {
  const [vistaActual, setVistaActual] = useState('null');
  const [datosEjercicio, setDatosEjercicio] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState(null);

  const volverAlMenu = () => {
    setVistaActual('null');
    setDatosEjercicio(null);
  };

  const renderVista = () => {
    switch (vistaActual) {
      case 1: return <Ejercicio1 {...datosEjercicio} volverAlMenu={volverAlMenu} />;
      case 2: return <Ejercicio2 {...datosEjercicio} volverAlMenu={volverAlMenu} />;
      case 3: return <Ejercicio3 {...datosEjercicio} volverAlMenu={volverAlMenu} />;
      case 4: return <Ejercicio4 volverAlMenu={volverAlMenu} />;
      case 5: return <Ejercicio5 volverAlMenu={volverAlMenu} />;
      case 6: return <Ejercicio6 volverAlMenu={volverAlMenu} />;
      case 7: return <Ejercicio7 volverAlMenu={volverAlMenu} />;
      case 8: return <Ejercicio8 volverAlMenu={volverAlMenu} />;
      case 9: return <Ejercicio9 volverAlMenu={volverAlMenu} />;
      case 10: return <Ejercicio10 volverAlMenu={volverAlMenu} />;
      default:
          return (<Menu
            seleccionar={(id) =>{
              if(id === 1 ||  id === 2 || id === 3) {
                setEjercicioSeleccionado(id);
                setMostrarModal(true);
              } else {
                setVistaActual(id);
              }
            }}
          />
        );
    }
  };

  if (mostrarModal) {
    return (
      <ModalForm1
        id={ejercicioSeleccionado}
        onConfirmar={(datos) => {
          if (ejercicioSeleccionado === 1 || ejercicioSeleccionado === 2 || ejercicioSeleccionado === 3) {
            setDatosEjercicio(datos);
          }
          setMostrarModal(false);
          setVistaActual(ejercicioSeleccionado);
        }}
        onCancelar={() => {setMostrarModal(false);setEjercicioSeleccionado(null)}}
      />
    );
  }

  return (
    <div>
      <h1 className="app">Taller 2 react</h1>
      {renderVista()}
    </div>
  )
}

export default App
