import Formulario from "./components/Formulario"
import ModalError from "./components/ModalError"
import Resultado from "./components/Resultado"
import Spinner from "./components/Spinner"
import useBuscador from "./hooks/useBuscador"
import ModalPais from "./components/ModalPais"

function App() {

  const {cargando, error, modalPais} = useBuscador()

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
        {

          cargando ? <Spinner /> : <Resultado />

        }
        {

          modalPais && <ModalPais />

        }
      </main>
    </>
  )
}

export default App
