import { createContext, useState, useEffect } from "react"

export const BuscadorContext = createContext()

const BuscadorProvider = ({children}) => {

    const [nombrePais, setNombrePais] = useState('')
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState('')
    const [resultadoBusqueda, setResultadoBusqueda] = useState([])
    const [modalPais, setModalPais] = useState(false)
    const [noResultado, setNoResultado] = useState(null)
    const [paisSeleccionado, setPaisSeleccionado] = useState('')

    const handleSubmit = (e) => {

        setCargando(true)
        setNoResultado(null)

        e.preventDefault()

        if (!nombrePais.trim('')) {

            setCargando(false)

            return setError('¡Debe completar el campo vacío!')

        }

    }

    const handleChangeNombrePais = (e) => {

        setNombrePais(e.target.value)

    }

    const cerrarModalError = () => {

        setError('')

    }

    const miembroONU = (estado) => {

        if (estado === true) {

            return ('Miembro')

        } else {

            return ('No es miembro')

        }

    }

    const soberaniaPais = (estado) => {

        if (estado === true) {

            return ('Reconocida')

        } else {

            return ('No reconocida')

        }

    }

    const activarModalPais = (resultado) => {

        setModalPais(!modalPais)
        seleccionarPais(resultado)

    }

    const seleccionarPais = (pais) => { 

        setPaisSeleccionado(pais)

    }

  return (
    <BuscadorContext.Provider value={{nombrePais, setNombrePais, handleChangeNombrePais, handleSubmit, cargando, setCargando, error, cerrarModalError, resultadoBusqueda, setResultadoBusqueda, miembroONU, soberaniaPais, activarModalPais, modalPais, noResultado, paisSeleccionado}}>
        {children}
    </BuscadorContext.Provider>
  )
}

export default BuscadorProvider
