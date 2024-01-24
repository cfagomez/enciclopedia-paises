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
                placeholder='Search in Minapedia...'
            />
            <input 
                type="submit"
                value="search"
            />
        </div>
    </form>
  )
}

export default Formulario
