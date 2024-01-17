import useBuscador from '../hooks/useBuscador'

const ModalError = () => {

    const {error, cerrarModalError} = useBuscador()

  return (
    <div className='error-modal-container'>
        <div className='error-modal-content'>
            <p className="error">{error}</p>
            <button
                className="boton-modal-error"
                type="button"
                onClick={cerrarModalError}
            >
              Cerrar
            </button>
        </div>
    </div>
  )
}

export default ModalError
