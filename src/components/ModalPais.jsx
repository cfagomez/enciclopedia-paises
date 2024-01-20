import React from 'react'
import useBuscador from '../hooks/useBuscador'

const ModalPais = () => {

    const {paisSeleccionado, activarModalPais} = useBuscador()
    const {name, flags, capital, languages, area, population, currencies, subregion, timezones, coatOfArms} = paisSeleccionado
    const {common, official} = name
    const {svg, alt} = flags
    const {svg: imagenEscudo} = coatOfArms

    const lenguajesToArray = Object.values(languages)
    const lenguajesToString = lenguajesToArray.toString()
    const lenguajes = lenguajesToString.replace(',', ', ')

    const monedaProperty = Object.values(currencies)
    const monedaObject = monedaProperty[0]
    const monedaToArray = Object.values(monedaObject)
    const monedaToString = monedaToArray.toString()
    const moneda = monedaToString.replace(',', ' ')

    const husoHorarioToString = timezones.toString()
    const husoHorario = husoHorarioToString.replaceAll(',', ', ')

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
                        width="135px"
                        height="68px"
                    />
                    <p>Bandera</p>
                </div>
                <div className='bandera-container'>
                    <img 
                        src={imagenEscudo}
                        alt="Escudo"
                        width="105px"
                        height="105px" 
                    />
                    <p>Escudo</p>
                </div>
            </div>
            <div className='datos-extra-container'>
                <div className='dato-extra-container'>
                    <p>Capital</p>
                    <p>{capital}</p>
                </div>
                <div className='dato-extra-container'>
                    <p>Idiomas</p>
                    <p>{lenguajes}</p>
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
                    <p>{moneda}</p>
                </div>
                <div className='dato-extra-container'>
                    <p>Continente</p>
                    <p>{subregion}</p>
                </div>
                <div className='dato-extra-container'>
                    <p>Huso horario:</p>
                    <p>{husoHorario}</p>
                </div>
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
