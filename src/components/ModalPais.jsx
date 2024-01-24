import React from 'react'
import useBuscador from '../hooks/useBuscador'

const ModalPais = () => {

    const {paisSeleccionado, activarModalPais} = useBuscador()
    const {name, flags, area, population, timezones, coatOfArms} = paisSeleccionado
    const {common, official} = name
    const {svg} = flags
    const {svg: imagenEscudo} = coatOfArms

    let lenguajes
    let moneda

    if (paisSeleccionado.languages) {

        const lenguajesToArray = Object.values(paisSeleccionado.languages)
        const lenguajesToString = lenguajesToArray.toString()
        lenguajes = lenguajesToString.replace(',', ', ')

    }

    if (paisSeleccionado.currencies) {

        const monedaProperty = Object.values(paisSeleccionado.currencies)
        const monedaObject = monedaProperty[0]
        const monedaToArray = Object.values(monedaObject)
        const monedaToString = monedaToArray.toString()
        moneda = monedaToString.replace(',', ' ')

    }

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
                        alt={
                            flags.alt ? flags.alt : '-'
                        }
                        width="135px"
                        height="68px"
                    />
                    <p>Flag</p>
                </div>
                <div className='bandera-container'>
                    <img 
                        src={imagenEscudo}
                        alt="Escudo"
                        width="105px"
                        height="105px" 
                    />
                    <p>Coat of arms</p>
                </div>
            </div>
            <div className='datos-extra-container'>
                <div className='dato-extra-container'>
                    <p>Capital</p>
                    <p>
                        {
                            paisSeleccionado.capital ? paisSeleccionado.capital : '-'
                        }
                    </p>
                </div>
                <div className='dato-extra-container'>
                    <p>Language</p>
                    <p>
                        {
                            paisSeleccionado.languages ? lenguajes : '-'
                        }
                    </p>
                </div>
                <div className='dato-extra-container'>
                    <p>Area</p>
                    <p>{area}</p>
                </div>
                <div className='dato-extra-container'>
                    <p>Population</p>
                    <p>{population}</p>
                </div>
                <div className='dato-extra-container'>
                    <p>Currency</p>
                    <p>
                        {
                            paisSeleccionado.currencies ? moneda : '-'
                        }
                    </p>
                </div>
                <div className='dato-extra-container'>
                    <p>Continent</p>
                    <p>
                        {
                            paisSeleccionado.subregion ? paisSeleccionado.subregion : '-'
                        }
                    </p>
                </div>
                <div className='dato-extra-container'>
                    <p>Time zone:</p>
                    <p>{husoHorario}</p>
                </div>
            </div>
            <button
                type='button'
                className='boton-modal-pais'
                onClick={activarModalPais}
            >
                Close
            </button>
        </div>
    </div>
  )
}

export default ModalPais
