window.addEventListener('load', picnic)
function picnic() {
    let temperaturaActual = prompt('¿Cuál es la temperatura actual en grados Celsius?')
    let temperaturaAdecuada
    temperaturaActual >= 12 && temperaturaActual <= 30 ? temperaturaAdecuada = true : temperaturaAdecuada = false;
    if (temperaturaAdecuada === true) {
        let lluvia = prompt('¿Está lloviendo? (Escribe si o no)').toLowerCase()
        lluvia === 'no' ? lluvia = false : lluvia = true;
        if (lluvia === false) {
            let minutosDisponibles = prompt('¿Cuántos minutos tienes disponibles para el picnic?')
            let tiempoAdecuado
            minutosDisponibles >= 90 ? tiempoAdecuado = true : tiempoAdecuado = false;
            temperaturaAdecuada === true && lluvia === false && tiempoAdecuado === true ? alert('¡Es un buen momento para organizar un picnic!') : alert('No es un buen momento para organizar un picnic')
        } else {
            alert('No es recomendable hacer un picnic cuando llueve')
        }
    } else {
        alert('La temperatura no es adecuada para hacer un Picnic')
    }
}