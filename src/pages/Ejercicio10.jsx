import { useState } from 'react';
import TarjetaUsuario from '../components/TarjetaUsuario';
import ModalAddUsuario from '../components/ModalAddUsuario';


export default function Ejercicio10({ volverAlMenu}) {
  const [usuarios, setUsuarios] = useState([]);
  const [ultimoId, setUltimoId] = useState(1);
  const puedeVerDetalle = (usuario) => usuario.activo && usuario.edad >= 18;
  const [mostrarModal, setMostrarModal] = useState(false);

  if (mostrarModal) {
    return (
      <ModalAddUsuario
        usuarios={usuarios}
        setUsuarios={setUsuarios}
        ultimoId={ultimoId}
        setUltimoId={setUltimoId}
        mostrarModal={mostrarModal}
        setMostrarModal={setMostrarModal}
      />
    );
  }

  return (
    <div className="ejercicio">
      <h2>Ejercicio 10: Tarjetas de Usuarios</h2>
      <div className="tarjetas-container">
        {usuarios && usuarios.map((usuario) => (
          <TarjetaUsuario
            key={usuario.id}
            {...usuario}
            puedeVerDetalle={puedeVerDetalle(usuario)}
          />
        ))}
      </div>
      <div className="modal-botones">
        <button onClick={() => setMostrarModal(true)} className="btn-modal">Agregar Usuario</button>
        <button onClick={volverAlMenu} className="btn-volver">Volver al menú</button>
      </div>
    </div>
  );
}