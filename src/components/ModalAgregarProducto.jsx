import { useState } from 'react';

export default function ModalAgregarProducto({ mostrarModal, setMostrarModal, productos, setProductos, ultimoId, setUltimoId }) {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    
    const agregarProducto = () => {
        if (!nombre || !precio) return; // validación básica

        const nuevoProducto = {
        id:  ultimoId,//crypto.randomUUID(),
        nombre,
        precio: parseFloat(precio),
        };

        setProductos([...productos, nuevoProducto]);
        setUltimoId(ultimoId + 1);
        setNombre('');
        setPrecio('');
        setMostrarModal(false);
    };

    return (
        mostrarModal && (
        <div className="modal-backdrop">
            <div className="modal-contenido">
            <h3>Agregar nuevo producto</h3>
            <input
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="number"
                placeholder="Precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
            />
            <div className="modal-botones">
                <button onClick={() => setMostrarModal(false)}>Cancelar</button>
                <button onClick={agregarProducto}>Agregar</button>
            </div>
            </div>
        </div>
        )
    );
}