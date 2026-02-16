export default function Perfil({ nombre, edad, ciudad }) {
  return (
    <div className="perfil-card">
      <h4>{nombre || 'Sin nombre'}</h4>
      <p><strong>Edad:</strong> {edad}</p>
      <p><strong>Ciudad:</strong> {ciudad || 'Ciudad no registrada'}</p>
    </div>
  );
}
