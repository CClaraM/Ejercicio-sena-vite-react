import { useState } from "react";
import SaludoUsuario from "../components/SaludoUsuario";

export default function Ejercicio6({ volverAlMenu}) {
  const saludos = ["Hola", "¿Cómo estás?", "¡Bienvenido!", "¡Qué gusto verte!", "¡Espero que tengas un gran día!",  "¡Qué alegría verte!", "¡Espero que estés teniendo un día maravilloso!", "¡Es un placer saludarte!", "¡Espero que todo esté bien contigo!", "¡Qué bueno verte por aquí!"];
  const nombres = ["Juan", "María", "Carlos", "Ana", "Luis", "Sofía", "Pedro", "Lucía", "Miguel", "Valentina", "Diego", "Camila", "Jorge", "Isabella", "Andrés", "Gabriela", "Ricardo", "Fernanda", "Santiago", "Natalia"];
  
  const generarCombinaciones = () => {
    return Array.from({ length: 3 }, () => ({
      mensaje: saludos[Math.floor(Math.random() * saludos.length)],
      nombre: nombres[Math.floor(Math.random() * nombres.length)],
    }));
  };

  const [combinaciones, setCombinaciones] = useState(generarCombinaciones());

  const refrescar = () => {
    setCombinaciones(generarCombinaciones());
  };
  
  return (
    <div className="ejercicio">
      <h2>Ejercicio 6: Props con combinaciones</h2>
      {combinaciones.map((combo, index) => (
        <SaludoUsuario
          key={index}
          mensaje={combo.mensaje}
          nombre={combo.nombre}
        />
      ))}
      <button onClick={refrescar} className="btn-refresh">🔁 Nuevo saludo</button>
      <button onClick={volverAlMenu} className="btn-volver">Volver al menú</button>
    </div>
  );
}