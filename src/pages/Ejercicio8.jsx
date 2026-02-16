import { useState } from 'react';
import ModalLogin from '../components/ModalLogin';

export default function Ejercicio8({ volverAlMenu}) {
  const [rol, setRol] = useState('user');
  const [login, setLogin] = useState(false);

  if (login === false) {
        return (
          <ModalLogin
            login={login}
            setLogin={setLogin}
            rol={rol}
            setRol={setRol}
            volverAlMenu={volverAlMenu}
          />
        );
  }

  return (
    <div className="panel-usuario">
      <h2>
        {rol === 'admin' ? 'Bienvenido al Panel de Administración' : 'Bienvenido al Panel de Usuario'}
      </h2>
      
      <p>
        {rol === 'admin'
          ? 'Aquí puedes gestionar usuarios, productos y reportes.'
          : 'Aquí puedes ver tu información personal y realizar pedidos.'}
      </p>

      <button onClick={() => setLogin(false)} className="btn-volver">Cerrar sesión</button><br />
      <button onClick={volverAlMenu} className="btn-volver">Volver al menú</button>
    </div>
  );
}