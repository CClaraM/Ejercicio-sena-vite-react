export default function Ejercicio2({ nombre, ciudad, anio, volverAlMenu}) {
  let hoy = new Date();
  let edad1 = nombre ? hoy.getFullYear() - nombre.getFullYear() : 'No disponible';
  let edad2 = ciudad ? hoy.getFullYear() - ciudad.getFullYear() : 'No disponible';
  let edad3 = anio ? hoy.getFullYear() - anio.getFullYear() : 'No disponible';
  return (
    <div className="ejercicio">
      <h2>Ejercicio 2: Función calcularEdad()</h2>
      
      <p>La fecha de nacimiento es: {nombre ? nombre.toLocaleDateString('es-ES') : 'No disponible'}</p>
      <p>La edad es: {edad1}</p>
      <p>La fecha de nacimiento es: {ciudad ? ciudad.toLocaleDateString('es-ES') : 'No disponible'}</p>
      <p>La edad es: {edad2}</p>
      <p>La fecha de nacimiento es: {anio ? anio.toLocaleDateString('es-ES') : 'No disponible'}</p>
      <p>La edad es: {edad3}</p>
      <button onClick={volverAlMenu} className="btn-volver">Volver al menú</button>
    </div>
  );
}