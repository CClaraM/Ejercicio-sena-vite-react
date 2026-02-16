import { useState } from 'react';

export default function ModalAddUsuario({ usuarios, setUsuarios, ultimoId, setUltimoId, mostrarModal, setMostrarModal }) {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [activo, setActivo] = useState(false);

    const agregarUsuario = () => {
        if (!edad) return; // validación básica
        const nuevoUsuario = {
        id:  ultimoId,
        nombre: nombre,
        edad: parseInt(edad),
        activo: activo
        }
        
        setUsuarios([...usuarios, nuevoUsuario]);
        setUltimoId(ultimoId + 1);
        setMostrarModal(false);
    };

    return (
        mostrarModal && (
        <div className="modal-backdrop">
            <div className="modal-contenido">
                <h3>Agregar nuevo usuario</h3>
                <input
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Edad"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                />

                <p>Activo</p><input
                    type="checkbox"
                    checked={activo}
                    onChange={(e) => setActivo(e.target.checked)}
                />

                <div className="modal-botones">
                    <button onClick={() => setMostrarModal(false)}>Cancelar</button>
                    <button onClick={agregarUsuario}>Agregar</button>
                </div>
            </div>
        </div>
        )
    )
}