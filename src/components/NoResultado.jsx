import useBuscador from '../hooks/useBuscador'

const NoResultado = () => {

  const {limpiarResultadoBusqueda} = useBuscador()

  return (
    <div className='no-resultado-container'>
      <p>No results found.</p>
      <button 
        className="volver-atras-boton"
        onClick={limpiarResultadoBusqueda}
      >
        Back
    </button>
    </div>
  )
}

export default NoResultado
