import { createContext, useState, useEffect} from "react"

export const BuscadorContext = createContext()

const BuscadorProvider = ({children}) => {

    const [nombrePais, setNombrePais] = useState('')
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState('')
    const [listaPaises, setListaPaises] = useState([])
    const [modalPais, setModalPais] = useState(false)
    const [noResultado, setNoResultado] = useState(false)
    const [paisSeleccionado, setPaisSeleccionado] = useState('')
    const [resultadoBusqueda, setResultadoBusqueda] = useState([])
    const [filtros, setFiltros] = useState('')

    useEffect(() => {

        const obtenerPaises = async () => {

            setCargando(true)

            try {
    
                const url = `https://restcountries.com/v3.1/all`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()

                const resultadoOrdenado = resultado.sort(function (a, b) {
                    if (a.name.common < b.name.common) {
                      return -1;
                    }
                    if (a.name.common > b.name.common) {
                      return 1;
                    }
                    return 0;
                  });

                  setCargando(false)
                  setListaPaises(resultadoOrdenado)
    
            } catch (error) {
    
                console.log(error)
    
            }
    
            setNombrePais('')
    
        }

        obtenerPaises()

    }, [])

    const handleSubmit = (e) => {

        setCargando(true)
        setNoResultado(false)
        setResultadoBusqueda([])

        e.preventDefault()

        if (!nombrePais.trim('')) {

            setCargando(false)

            return setError('¡Debe completar el campo vacío!')

        }

        filtrarPais(nombrePais)
        setCargando(false)

    }

    const filtrarPais = (pais) => {

        const paisMayuscula = pais.charAt(0).toUpperCase() + pais.slice(1)

        const paisFiltrado = listaPaises.filter( p => p.name.common === paisMayuscula)

        if (paisFiltrado.length === 0) {

            setNoResultado(true)

            return

        }

        setResultadoBusqueda(paisFiltrado)
        setNombrePais('')

    }

    const filtrarContinente = (continente) => {

        const continenteMayuscula = continente.charAt(0).toUpperCase() + continente.slice(1)

        const continenteFiltrado = listaPaises.filter( p => p.region === continenteMayuscula)

        if (continenteFiltrado.length === 0) {

            setNoResultado(true)

            return

        }

        setResultadoBusqueda(continenteFiltrado)

    }

    const handleChangeNombrePais = (e) => {

        setNombrePais(e.target.value)
        setResultadoBusqueda([])
        setFiltros(null)

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

    const limpiarResultadoBusqueda = () => {

        setResultadoBusqueda([])
        setNoResultado(false)
        setNombrePais('')
        setFiltros(null)

    }

    const modificarFiltro = (tipoFiltro) => {

        setFiltros(tipoFiltro)

    }

  return (
    <BuscadorContext.Provider value={{nombrePais, setNombrePais, handleChangeNombrePais, handleSubmit, cargando, setCargando, error, cerrarModalError, listaPaises, setListaPaises, miembroONU, soberaniaPais, activarModalPais, modalPais, noResultado, paisSeleccionado, resultadoBusqueda, limpiarResultadoBusqueda, modificarFiltro, filtros, filtrarContinente}}>
        {children}
    </BuscadorContext.Provider>
  )
}

export default BuscadorProvider
