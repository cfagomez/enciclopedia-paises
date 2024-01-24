import React from 'react'
import { CONTINENTES } from '../constants'
import useBuscador from '../hooks/useBuscador'

const MenuFiltros = () => {

  const {modificarFiltro, filtros, filtrarContinente} = useBuscador()

  return (
    <div className='filtros-container'>
      <h2>Filters:</h2>
      <button 
        onClick={() => modificarFiltro('continente')}
      >
        Continent 
      </button>
      {

        filtros === "continente" && (

          <select 
            name="continente"
            onChange={(e) => filtrarContinente(e.target.value)}
          >
            <option value="">-- Select an option --</option>
            {
              CONTINENTES.map(continente => (
                
                <option 
                  value={continente.nombre}
                  key={continente.id}
                >
                  {continente.nombre}
                </option>

              ))
            }
          </select>
        )
      }   
    </div>
  )
}

export default MenuFiltros
