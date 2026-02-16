import { useState } from 'react';
export default function ModalLogin({ login, setLogin, rol, setRol, volverAlMenu }) {
    const [newRol, setNewRol] = useState('user');
    const [loggedIn] = useState(true);

    const enviar = () => {
        setRol(newRol);
        setLogin(loggedIn);
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-contenido">
                <h3>Login</h3>
                <label for="input1">Rol de usuario:</label>

                <select id='input1' name='rol' value={newRol} onChange={(e) => setNewRol(e.target.value)}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>

                <div className='model-botones'>
                    <button onClick={volverAlMenu}>Cancelar</button>
                    <button onClick={enviar}>Login</button>
                </div> 
            </div>
        </div>
    )
}