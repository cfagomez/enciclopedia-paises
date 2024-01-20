import useBuscador from "../hooks/useBuscador"

const ListadoPaises = () => {

    const {listaPaises, miembroONU, soberaniaPais, activarModalPais, resultadoBusqueda, limpiarResultadoBusqueda} = useBuscador()

  return (
    <div className="contenedor-tabla">
      <table>
        <tbody>
            <tr>
                <th className="pais">Estado soberano</th>
                <th className="capital">Capital</th>
                <th className="continente">Continente</th>
                <th className="estatus">Estatus ONU</th>
                <th className="soberania">Soberanía</th>
                <th className="bandera">Bandera</th>
            </tr>
                {
                    resultadoBusqueda.length > 0 ? (

                        resultadoBusqueda.map( resultado => (

                            <tr key={resultado.name.common}>
                                <td><button 
                                    className="boton-nombre-pais"
                                    onClick={() => activarModalPais(resultado)}
                                    >
                                        {resultado.translations.spa.common}</button></td>
                                <td className="capital-valor">{resultado.capital}</td>
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
                                        {resultado.translations.spa.common}</button></td>
                                <td className="capital-valor">{resultado.capital}</td>
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
        {
            resultadoBusqueda.length > 0 ? (

                <button 
                    className="volver-atras-boton"
                        onClick={limpiarResultadoBusqueda}
                >
                    Volver atrás
                </button>

            ) : (

                null

            )
        }
        
    </div>
  )
}

export default ListadoPaises
