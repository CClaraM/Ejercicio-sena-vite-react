import { useState } from 'react';

export default function ModalNotificacion({ notificacion, setNotificacion, mostrarModal, setMostrarModal }) {
    const [text, setText] = useState("");
    
    const enviar = () => {
        if (!text) return; // validación básica
        setNotificacion([...notificacion, text]);
        setMostrarModal(false);
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-contenido">
                <h3>Agregar nueva notificación</h3>
                
                <textarea
                    placeholder="Contenido de la notificación..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={5}
                    cols={40}
                />

                <div className="modal-botones">
                    <button onClick={() => setMostrarModal(false)}>Cancelar</button>
                    <button onClick={enviar}>Agregar</button>
                </div>
            </div>
        </div>
    );
}