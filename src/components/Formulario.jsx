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
                placeholder='For example: Belgium'
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
