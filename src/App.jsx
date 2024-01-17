import Formulario from "./components/Formulario"
import ModalError from "./components/ModalError"
import Spinner from "./components/Spinner"
import useBuscador from "./hooks/useBuscador"

function App() {

  const {cargando, error} = useBuscador()

  return (
    <>
      <header>
        <div className="header-container">
          <h1>Minapedia</h1>
          <Formulario />
          {
            error && <ModalError />
          }
        </div>
      </header>
      <hr />
      <main>
        {
          cargando ? <Spinner /> : null
        }
      </main>
    </>
  )
}

export default App
