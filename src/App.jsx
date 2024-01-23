import Formulario from "./components/Formulario"
import ModalError from "./components/ModalError"
import ListadoPaises from "./components/ListadoPaises"
import Spinner from "./components/Spinner"
import useBuscador from "./hooks/useBuscador"
import ModalPais from "./components/ModalPais"
import NoResultado from "./components/NoResultado"
import MenuFiltros from "./components/MenuFiltros"
import BotonArriba from "./components/BotonArriba"

function App() {

  const {cargando, error, modalPais, noResultado, resultadoBusqueda} = useBuscador()

  return (
    <>
      <header>
        <div className="header-container">
          <p className="logo">Minapedia</p>
          <Formulario />
          {
            error && <ModalError />
          }
        </div>
      </header>
      <hr />
      <main>
        <h1>Países del mundo</h1>
        <hr />
        <MenuFiltros />
        {

          cargando ? <Spinner /> : resultadoBusqueda.length > 0 ? <ListadoPaises /> : noResultado ? <NoResultado /> : <ListadoPaises />

        }
        {

          modalPais && <ModalPais />

        }
        <BotonArriba />
      </main>
    </>
  )
}

export default App
