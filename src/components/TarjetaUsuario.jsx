export default function TarjetaUsuario({ nombre, edad, activo, puedeVerDetalle }) {
  return (
    <div className="card-grid">
        <div className="tarjeta-ejercicio">
          <p>{`Nombre: ${nombre || 'Sin nombre'}`}</p>
          <p>{`Edad: ${edad}`}</p>
          <p>{`Estado: ${activo ? 'Activo' : 'Inactivo'}`}</p>
          {puedeVerDetalle && <button>Ver detalle</button>}
        </div>
    </div>
  );
}
