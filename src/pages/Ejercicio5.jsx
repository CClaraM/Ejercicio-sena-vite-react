import { useState } from 'react';
import ModalAgregarProducto from '../components/ModalAgregarProductoStock';

export default function Ejercicio5({ volverAlMenu}) {
  const [productos, setProductos] = useState([]);
  const [ultimoId, setUltimoId] = useState(1);
  const [mostrarModal, setMostrarModal] = useState(false);
  
  if (mostrarModal) {
    return (
      <ModalAgregarProducto
        mostrarModal={mostrarModal}
        setMostrarModal={setMostrarModal}
        productos={productos}
        setProductos={setProductos}
        ultimoId={ultimoId}
        setUltimoId={setUltimoId}
      />
    );
  }

  return (
    <div className="ejercicio">
      <div>
        <table class="table table-bordered table-striped">
          <thead class="table-dark">
            <tr>
              <th>Productos</th>
            </tr>
          </thead>

          <tbody id="tablaProductos">
            {productos.map((prod) => (
              <tr key={prod.id}>
                <td>
                  <div className="card-grid">
                    <div className="tarjeta-ejercicio">
                      <strong>KEY {prod.id}</strong><br />
                      Nombre: {prod.nombre}<br />
                      Precio: $ {prod.precio}<br />
                      Disponibilidad: {prod.stock > 0 ? 'Disponible' : 'No disponible'}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <a></a>
        <div>
          <button className="btn btn-primary" onClick={() => setMostrarModal(true)}>Agregar Producto</button>
        </div>
      </div>
      <button onClick={volverAlMenu} className="btn-volver">Volver al menú</button>
    </div>
  );
}