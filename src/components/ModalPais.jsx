import React from 'react'
import useBuscador from '../hooks/useBuscador'

const ModalPais = () => {

    const {resultadoBusqueda, activarModalPais} = useBuscador()
    const {name, flags, capital, languages, area, population, currencies, subregion, latlng, timezones, coatOfArms} = resultadoBusqueda[0]
    const {common, official} = name
    const {svg, alt} = flags
    const {svg: imagenEscudo} = coatOfArms

    const lenguajes = Object.values(languages)
    const moneda = Object.values(currencies)
    const arrayMoneda = Object.values(moneda[0])

    console.log(arrayMoneda)

  return (
    <div className='pais-modal-container'>
        <div className='pais-modal-content'>
            <div className='nombres-container'>
                <p>{common}</p>
                <p>{official}</p>
            </div>
            <div className='banderas-container'>
                <div className='bandera-container'>
                    <img 
                        src={svg} 
                        alt={alt}
                        width="250px"
                        height="175px"
                    />
                    <p>Bandera</p>
                </div>
                <div className='bandera-container'>
                    <img 
                        src={imagenEscudo}
                        alt="Escudo"
                        width="250px"
                        height="175px" 
                    />
                    <p>Escudo</p>
                </div>
            </div>
            <div className='datos-extra-container'>
                <div className='dato-extra-container'>
                    <p>Capital</p>
                    <p>Capital {capital}</p>
                </div>
                <div className='dato-extra-container'>
                    <p>Idiomas</p>
                        {
                            lenguajes.map( lenguaje => (

                                <p key={lenguaje}>{lenguaje}</p>

                            ))
                        }
                </div>
                <div className='dato-extra-container'>
                    <p>Superficie</p>
                    <p>{area}</p>
                </div>
                <div className='dato-extra-container'>
                    <p>Población</p>
                    <p>{population}</p>
                </div>
                <div className='dato-extra-container'>
                    <p>Moneda</p>
                    <p>{arrayMoneda[0]}</p>
                </div>
                <div className='dato-extra-container'>
                    <p>Continente</p>
                    <p>{subregion}</p>
                </div>
                <p>{timezones}</p>
            </div>
            <button
                type='button'
                className='boton-modal-pais'
                onClick={activarModalPais}
            >
                Cerrar
            </button>
        </div>
    </div>
  )
}

export default ModalPais
