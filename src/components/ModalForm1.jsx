import { useState } from 'react';

export default function ModalForm1({ id,onConfirmar, onCancelar }) {
    const [nombre, setNombre] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [anio, setAnio] = useState("");
    const [estado, setEstado] = useState(false);

    const enviar = () => {
        if (id === 1 && nombre && ciudad && anio) {
            onConfirmar({ nombre, ciudad, anio });
        } else if (id === 2 && nombre && ciudad && anio) {
            onConfirmar({ nombre, ciudad, anio });
        } else if (id === 3) {
            onConfirmar({ activo: estado });
        } else {
            alert("Completa los campos antes de continuar");
        }
    };

    return (
        
        <div className="modal-backdrop">
            {id === 1 && (
                <div className="modal-contenido">
                    <h3>Antes de continuar....</h3>
                    <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
                    <input placeholder="Ciudad" value={ciudad} onChange={e => setCiudad(e.target.value)} />
                    <input placeholder="Año" type="date" value={anio} onChange={e => setAnio(e.target.value)} />
                    <div className='model-botones'>
                        <button onClick={onCancelar}>Cancelar</button>
                        <button onClick={enviar}>Confirmar</button>
                    </div>                
                </div>
            )}

            {id === 2 && (
                <div className="modal-contenido">
                    <h3>Antes de continuar....</h3>
                    <label for="input1">Fecha nacimiento usuario 1:</label>
                    <input id='input1' type="date" value={nombre ? nombre.toISOString().slice(0, 10) : ''} onChange={(e) => {const valor =e.target.value; const fechaConvertida= new Date(valor); setNombre(fechaConvertida)}} />
                    <label for="input2">Fecha nacimiento usuario 2:</label>
                    <input id='input2' type="date" value={ciudad ? ciudad.toISOString().slice(0, 10) : ''} onChange={(e) => {const valor =e.target.value; const fechaConvertida= new Date(valor); setCiudad(fechaConvertida)}} />
                    <label for="input3">Fecha nacimiento usuario 3:</label>
                    <input id='input3' type="date" value={anio ? anio.toISOString().slice(0, 10) : ''} onChange={(e) => {const valor =e.target.value; const fechaConvertida= new Date(valor); setAnio(fechaConvertida)}} />
                    <div className='model-botones'>
                        <button onClick={onCancelar}>Cancelar</button>
                        <button onClick={enviar}>Confirmar</button>
                    </div>   
                </div>
            )}

            {id === 3 && (
                <div className="modal-contenido">
                    <h3>Ingrese el estado actual del Usuario.</h3>
                    <label for="input1">Estado del usuario:</label>

                    <select id='input1' name='estado' value={estado} onChange={(e) => setEstado(e.target.value === 'true')}>
                        <option value="true">Activo</option>
                        <option value="false">Inactivo</option>
                    </select>

                    <div className='model-botones'>
                        <button onClick={onCancelar}>Cancelar</button>
                        <button onClick={enviar}>Confirmar</button>
                    </div> 
                </div>
            )}
        </div>
        
    );
}