import { useState } from 'react';
import ModalNotificacion from '../components/ModalNotificacion';

export default function Ejercicio9({ volverAlMenu}) {
  const [notificacion, setNotificacion] = useState([]);
  const [mostrarNotificaciones, setMostrarNotificaciones] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);

  if (mostrarModal) {
    return (
      <ModalNotificacion
        notificacion={notificacion}
        setNotificacion={setNotificacion}
        mostrarModal={mostrarModal}
        setMostrarModal={setMostrarModal}
      />
    );
  }


  return (
    <div className="ejercicio">
      <h2>Ejercicio 9: Notificaciones Condicionales</h2>
      {mostrarNotificaciones 
        ? <button onClick={() => setMostrarNotificaciones(false)} className="btn-notificacion">Ocultar Notificaciones</button>
        : <button onClick={() => setMostrarNotificaciones(true)} className="btn-notificacion">Ver Notificaciones</button>
      }<br />
      {
        mostrarNotificaciones && (
          notificacion.length > 0 ? (
            <div className="notificaciones">
              <h3>Notificaciones:</h3>
              <div className="notificaciones-lista">
                {notificacion.map((n, i) => (
                  <p key={i}>{n}</p>
                ))}
              </div>
            </div>
          ) : (
            <p>No hay notificaciones.</p>
          )
        ) 
      }

      <button onClick={() => setMostrarModal(true)} className="btn-modal">Agregar notificacion</button>
      <button onClick={volverAlMenu} className="btn-volver">Volver al menú</button>
    </div>
  );
}