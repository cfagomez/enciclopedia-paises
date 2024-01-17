import { createContext, useState } from "react"

export const BuscadorContext = createContext()

const BuscadorProvider = ({children}) => {

    const [nombrePais, setNombrePais] = useState('')
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState('')

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

            const url = `https://restcountries.com/v3.1/name/${nombrePais}`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            console.log(resultado)

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

  return (
    <BuscadorContext.Provider value={{nombrePais, handleChangeNombrePais, handleSubmit, cargando, error, cerrarModalError}}>
        {children}
    </BuscadorContext.Provider>
  )
}

export default BuscadorProvider
