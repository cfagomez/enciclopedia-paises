import { createContext, useState } from "react"

export const BuscadorContext = createContext()

const BuscadorProvider = ({children}) => {

    const [nombrePais, setNombrePais] = useState('')
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState('')
    const [resultadoBusqueda, setResultadoBusqueda] = useState([])
    const [modalPais, setModalPais] = useState(false)

    const handleSubmit = (e) => {

        setCargando(true)

        e.preventDefault()

        if (!nombrePais.trim('')) {

            setCargando(false)

            return setError('¡Debe completar el campo vacío!')

        }

        buscarPais()

    }

    const buscarPais = async () => {

        try {

            const url = `https://restcountries.com/v3.1/translation/${nombrePais}`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            setResultadoBusqueda(resultado)

        } catch (error) {

            console.log(error)

        }

        setCargando(false)
        setNombrePais('')

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

    const activarModalPais = () => {

        setModalPais(!modalPais)

    }

  return (
    <BuscadorContext.Provider value={{nombrePais, handleChangeNombrePais, handleSubmit, cargando, error, cerrarModalError, resultadoBusqueda, miembroONU, soberaniaPais, activarModalPais, modalPais}}>
        {children}
    </BuscadorContext.Provider>
  )
}

export default BuscadorProvider
