import useBuscador from "../hooks/useBuscador"
import { miembroONU, soberaniaPais } from "../helpers"

const ListadoPaises = () => {

    const {listaPaises, activarModalPais, resultadoBusqueda, limpiarResultadoBusqueda} = useBuscador()

  return (
    <div className="contenedor-tabla">
      {
        resultadoBusqueda.length > 0 ? (

            <button 
                className="volver-atras-boton"
                onClick={limpiarResultadoBusqueda}
            >
                Return to full list
            </button>

        ) : (

            null

        )
      }
      <hr />
      <table>
        <tbody>
            <tr>
                <th className="pais">Country</th>
                <th className="capital">Capital</th>
                <th className="continente">Continent</th>
                <th className="estatus">UN Status</th>
                <th className="soberania">Sovereignty</th>
                <th className="bandera">Flag</th>
            </tr>
                {
                    resultadoBusqueda.length > 0 ? (

                        resultadoBusqueda.map( resultado => (

                            <tr key={resultado.name.common}>
                                <td>
                                    <button 
                                    className="boton-nombre-pais"
                                    onClick={() => activarModalPais(resultado)}
                                    >
                                        {resultado.name.common}
                                    </button>
                                </td>
                                <td className="capital-valor">
                                    {
                                        resultado.capital ? resultado.capital : '-'
                                    }
                                </td>
                                <td className="continente-valor">{resultado.region}</td>
                                <td className="estatus-valor">{miembroONU(resultado.unMember)}</td>
                                <td className="soberania-valor">{soberaniaPais(resultado.independent)}</td>
                                <td>
                                    <img 
                                        src={resultado.flags.svg}
                                        alt="The flag of Argentina features three equal horizontal bands of light blue, white and light blue. A brown-edged golden sun is centered in the white band."
                                        width="75px"
                                        height="50px"
                                    />
                                </td>
                            </tr>
                        ))

                    ) : (

                        listaPaises.map( resultado => (

                            <tr key={resultado.name.common}>
                                <td><button 
                                    className="boton-nombre-pais"
                                    onClick={() => activarModalPais(resultado)}
                                    >
                                        {resultado.name.common}</button></td>
                                <td className="capital-valor">
                                    {
                                        resultado.capital ? resultado.capital : '-'
                                    }
                                </td>
                                <td className="continente-valor">{resultado.region}</td>
                                <td className="estatus-valor">{miembroONU(resultado.unMember)}</td>
                                <td className="soberania-valor">{soberaniaPais(resultado.independent)}</td>
                                <td>
                                    <img 
                                        src={resultado.flags.svg}
                                        alt="The flag of Argentina features three equal horizontal bands of light blue, white and light blue. A brown-edged golden sun is centered in the white band."
                                        width="75px"
                                        height="50px"
                                    />
                                </td>
                            </tr>
                        ))

                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListadoPaises
