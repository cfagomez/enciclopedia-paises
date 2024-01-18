import useBuscador from "../hooks/useBuscador"

const Resultado = () => {

    const {resultadoBusqueda, miembroONU, soberaniaPais, activarModalPais} = useBuscador()

  return (
    <div>
      <table>
        <tbody>
            <tr>
                <th>Estado soberano</th>
                <th>Capital</th>
                <th>Continente</th>
                <th>Estatus ONU</th>
                <th>Soberanía</th>
                <th>Bandera</th>
            </tr>
                {
                    resultadoBusqueda.map( resultado => (

                        <tr key={resultado.name.common}>
                            <td><button 
                                className="boton-nombre-pais"
                                onClick={activarModalPais}
                                >
                                    {resultado.translations.spa.common}</button></td>
                            <td>{resultado.capital}</td>
                            <td>{resultado.region}</td>
                            <td>{miembroONU(resultado.unMember)}</td>
                            <td>{soberaniaPais(resultado.independent)}</td>
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
                }
        </tbody>
      </table>
    </div>
  )
}

export default Resultado
