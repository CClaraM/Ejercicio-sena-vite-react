import './Menu.css';

const ejercicios = [
  { id: 1, titulo: "Variables y Template String" },
  { id: 2, titulo: "Función calcularEdad()" },
  { id: 3, titulo: "Condicional activo/inactivo" },
  { id: 4, titulo: "Map y tarjetas de productos" },
  { id: 5, titulo: "Ternario en stock" },
  { id: 6, titulo: "Props a SaludoUsuario" },
  { id: 7, titulo: "Destructuring en Perfil" },
  { id: 8, titulo: "Render condicional por rol" },
  { id: 9, titulo: "Notificaciones condicionales" },
  { id: 10, titulo: "TarjetaUsuario + lógica condicional" },
];

export default function Menu({ seleccionar }) {
  return (
    <div className="menu-grid">
      {ejercicios.map(({ id, titulo }) => (
        <div key={id} className="tarjeta-ejercicio" onClick={() => seleccionar(id)}>
          <h2>Ejercicio {id}</h2>
          <p>{titulo}</p>
        </div>
      ))}
    </div>
  );
}
