const BotonArriba = () => {

    let arribaBoton = document.getElementById("btn-arriba");

    window.onscroll = function() {scroll()};

    const scroll = () => {

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

            arribaBoton.style.display = "block";

        } else {

            arribaBoton.style.display = "none";

        }
    }

    const arriba = () => {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    }

  return (
    <div>
      <button 
        className='boton-arriba'
        id="btn-arriba"
        onClick={arriba}
    >
        Ir arriba
    </button>
    </div>
  )
}

export default BotonArriba
