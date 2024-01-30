export const miembroONU = (estado) => {

    if (estado === true) {

        return ('Member')

    } else {

        return ('Non member')

    }

}

export const soberaniaPais = (estado) => {

    if (estado === true) {

        return ('Recognized')

    } else {

        return ('Not recognized')

    }

}

export const mayusculaPalabraCompuesta = (pais) => {

    let i

    const array = pais.split(' ')

    for (i = 0; i < array.length; i++) {

        array[i] = array[i][0].toUpperCase() + array[i].slice(1)

    }

    return array.join(' ')

}