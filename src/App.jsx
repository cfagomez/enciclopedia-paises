import Formulario from "./components/Formulario"
import ModalError from "./components/ModalError"
import ListadoPaises from "./components/ListadoPaises"
import Spinner from "./components/Spinner"
import useBuscador from "./hooks/useBuscador"
import ModalPais from "./components/ModalPais"
import NoResultado from "./components/NoResultado"
import MenuFiltros from "./components/MenuFiltros"

function App() {

  const {cargando, error, modalPais, listaPaises, noResultado, resultadoBusqueda} = useBuscador()

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
        <hr />
        {

          cargando ? <Spinner /> : resultadoBusqueda.length > 0 ? <ListadoPaises /> : noResultado ? <NoResultado /> : <ListadoPaises />

        }
        {

          modalPais && <ModalPais />

        }
      </main>
    </>
  )
}

export default App
