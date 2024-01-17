import Formulario from "./components/Formulario"
import Spinner from "./components/Spinner"
import useBuscador from "./hooks/useBuscador"

function App() {

  const {cargando} = useBuscador()

  return (
    <>
      <header>
        <div className="header-container">
          <h1>Minapedia</h1>
          <Formulario />
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