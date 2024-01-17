import useBuscador from '../hooks/useBuscador'

const Formulario = () => {

    const {nombrePais, handleChangeNombrePais, handleSubmit} = useBuscador()

  return (
    <form
        onSubmit={handleSubmit}
    >
        <div className='form-container'>
            <input 
                type="text"
                value={nombrePais}
                onChange={handleChangeNombrePais}
                placeholder='Buscar en Minapedia...'
            />
            <input 
                type="submit"
                value="buscar"
            />
        </div>
    </form>
  )
}

export default Formulario
