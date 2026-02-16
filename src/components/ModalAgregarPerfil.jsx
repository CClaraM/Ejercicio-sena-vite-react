import { useState } from 'react';

export default function ModalAgregarPerfil({ mostrarModal, setMostrarModal, perfiles, setPerfiles, ultimoId, setUltimoId }) {
    const [nombre, setNombre] = useState('');
    const [Edad, setEdad] = useState('');
    const [Ciudad, setCiudad] = useState('');
    
    const agregarPerfil = () => {
        if (!nombre || !Edad ) return; // validación básica

        const nuevoPerfil = {
        id:  ultimoId,//crypto.randomUUID(),
        nombre,
        Edad: parseInt(Edad),
        Ciudad,
        };

        setPerfiles([...perfiles, nuevoPerfil]);
        setUltimoId(ultimoId + 1);
        setNombre('');
        setEdad('');
        setCiudad('');
        setMostrarModal(false);
    };

    return (
        mostrarModal && (
        <div className="modal-backdrop">
            <div className="modal-contenido">
            <h3>Agregar nuevo Perfil</h3>
            <input
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="number"
                placeholder="Edad"
                value={Edad}
                onChange={(e) => setEdad(e.target.value)}
            />
            <input
                placeholder="Ciudad"
                value={Ciudad}
                onChange={(e) => setCiudad(e.target.value)}
            />
            
            <div className="modal-botones">
                <button onClick={() => setMostrarModal(false)}>Cancelar</button>
                <button onClick={agregarPerfil}>Agregar</button>
            </div>
            </div>
        </div>
        )
    );
}