import React from 'react'
import useBuscador from '../hooks/useBuscador'

const NoResultado = () => {

  const {limpiarResultadoBusqueda} = useBuscador()

  return (
    <div className='no-resultado-container'>
      <p>No se han encontrado resultados.</p>
      <button 
        className="volver-atras-boton"
        onClick={limpiarResultadoBusqueda}
      >
        Volver atrás
    </button>
    </div>
  )
}

export default NoResultado
