export default function Ejercicio1({ nombre, ciudad, anio, volverAlMenu}) {
  
  return (
    <div className="ejercicio">
      <h2>Ejercicio 1: Variables y Template String</h2>
      <p>Hola, soy {nombre} de {ciudad} en {anio}</p>
      <button onClick={volverAlMenu} className="btn-volver">Volver al menú</button>
    </div>
  );
}

