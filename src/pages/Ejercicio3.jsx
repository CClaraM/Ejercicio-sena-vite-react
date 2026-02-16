export default function Ejercicio3({ activo, volverAlMenu}) {
  function mensajeEstado( estado) {
      return <span>{estado ? 'Activo' : 'Inactivo'}</span>;
  }
  return (
    <div className="ejercicio">
      <h2>Ejercicio 3: Estado del usuario</h2>
      <p>El estado actual del usuario es: {mensajeEstado( activo )} </p>
      <button onClick={volverAlMenu} className="btn-volver">Volver al menú</button>
    </div>
  );
}

