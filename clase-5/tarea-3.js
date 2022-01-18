//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


document.querySelector('#enviar1').onclick = function(){
    const horaVideoUno = Number(document.querySelector('#hora1').value);
    const minutosVideoUno = Number(document.querySelector('#minutos1').value);
    const segundosVideoUno = Number(document.querySelector('#segundos1').value);
    const totalVideoUno = (`${horaVideoUno} ${minutosVideoUno} ${segundosVideoUno}`);

    Number(totalVideoUno);

    document.getElementById("mostrar-texto1").value = totalVideoUno;

    return false;

}