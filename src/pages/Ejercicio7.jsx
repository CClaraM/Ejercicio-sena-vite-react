import { useState } from 'react';
import ModalAgregarPerfil from '../components/ModalAgregarPerfil';
import Perfil from '../components/Perfil';

export default function Ejercicio7({ volverAlMenu}) {
  const [perfiles, setPerfiles] = useState([]);
  const [ultimoId, setUltimoId] = useState(1);
  const [mostrarModal, setMostrarModal] = useState(false);
  
  if (mostrarModal) {
      return (
        <ModalAgregarPerfil
          mostrarModal={mostrarModal}
          setMostrarModal={setMostrarModal}
          perfiles={perfiles}
          setPerfiles={setPerfiles}
          ultimoId={ultimoId}
          setUltimoId={setUltimoId}
        />
      );
    }

  return (
    <div className="ejercicio">
      <h2>Ejercicio 7: Destructuracion en perfil</h2>
      
      <div className="ejercicio">
        <div>
          <h2>Perfiles</h2>
          <div id="tablaPerfiles">
            {perfiles.map((dato) => (
              <div key={dato.id} colSpan="3">
                  <Perfil nombre={dato.nombre} edad={dato.Edad} ciudad={dato.Ciudad} />
              </div>
            ))}
            </div>
          <a></a>
          <div>
            <button className="btn btn-primary" onClick={() => setMostrarModal(true)}>Agregar Perfil</button>
          </div>
        </div>
        <button onClick={volverAlMenu} className="btn-volver">Volver al menú</button>
      </div>
    </div>
  );
}