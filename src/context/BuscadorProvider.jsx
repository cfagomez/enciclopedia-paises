import { createContext, useState } from "react"

export const BuscadorContext = createContext()

const BuscadorProvider = ({children}) => {

    const [nombrePais, setNombrePais] = useState('')
    const [cargando, setCargando] = useState(false)

    const handleSubmit = (e) => {

        setCargando(true)

        e.preventDefault()

        if (!nombrePais.trim('')) {

            setCargando(false)

            return console.log('Campo vacío')

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

  return (
    <BuscadorContext.Provider value={{nombrePais, handleChangeNombrePais, handleSubmit, cargando}}>
        {children}
    </BuscadorContext.Provider>
  )
}

export default BuscadorProvider
