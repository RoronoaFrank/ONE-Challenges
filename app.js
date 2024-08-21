
//Varibles globales
//Los nombres de los objetos cambia a mayúsculas para diferenciar entre variables y objetos 
let textoValidado = '';
const aviso = 'Texto no válido. Por favor ingresa solo letras minúsculas.';
let textoEncriptado = '';
let caracterEncriptado = '';
let caracterRevelado = '';
 

//Objeto declarado para la encriptación
const LLAVE_DE_ENCRIPTACION = {
    e : 'enter',
    i : 'imes',
    a : 'ai',
    o : 'ober',
    u : 'ufat'
}

//Objeto declarado para la desencriptación
const LLAVE_DE_DESENCRIPTACION = {
    enter : 'e',
    imes : 'i',
    ai : 'a',
    ober : 'o',
    ufat : 'u'
}

//Coloca el cursor dentro del <textarea> cuando se carga la página
document.getElementById('textoIngresado').focus();

//Elimina la visibilidad del boton copiarTexto()
document.querySelector('.boton__copiar').style.display = 'none';

//Permite colocar el curso en el textarea al hacer click sobre el area del textarea
const escribir = document.getElementById('textoIngresado');

escribir.addEventListener('click', () => {
    escribir.focus();
});

//Coloca imagen cuando no hay texto en el campo area__salida
const imgSinTexto = document.getElementById('imgSinTexto');

//Actualiza visibilidad del imagen en el campo area__salida
function actualizarOutput(){
    const confirmacionTexto = document.getElementById('textoFinal').textContent;
    if (confirmacionTexto.trim() === ''){
        imgSinTexto.style.display = 'block';
        document.getElementById('textoFinal').style.display = 'none';
        document.getElementById('estatusApp').style.display = 'flex';
    }else{
        imgSinTexto.style.display = 'none';
        document.getElementById('textoFinal').style.display = 'flex';
        document.getElementById('estatusApp').style.display = 'none';
    }
}

//Esta función valida que el input contenga texto y que éste solo contenga letras minusculas
//Caso contrario genera un mensaje de notificacion o un retorna una constante
function validacionTexto (textoInput){
    if (textoInput.trim() === '') {
        document.getElementById ('estatusApp').innerHTML = 'Lee por favor la siguiente instrucción:';
        return;
    } else {
        document.getElementById ('estatusApp').innerHTML = '';
        const caracteresValidos = 'abcdefghijklmnñopqrstuvwxyz '.split('');
   
        for (let i = 0; i < textoInput.length; i++){
            if (!caracteresValidos.includes(textoInput[i])){
                return aviso;
            }
        }   
    return textoInput;
    }
}

//Esta funcióm lee el texto textarea, llama a la funcion validacionTexto,
//si el texto es inválido, genera un alert para notificar al usuario,
//si el texto es válido, encripta y devuelve el texto encriptado
function encriptador (){    
    let textoCapturado = document.getElementById('textoIngresado').value;
    textoValidado = validacionTexto(textoCapturado); 

    if (textoValidado === aviso){
        alert (aviso);
        return;
    } else {
        textoEncriptado = '';
        for (let i = 0; i < textoValidado.length; i++){
            if (['a','e','i','o','u'].includes(textoValidado[i])){
                caracterEncriptado = LLAVE_DE_ENCRIPTACION[textoValidado[i]];
            } else {
                caracterEncriptado = textoValidado[i];
            }
            textoEncriptado += caracterEncriptado;
        }
        document.getElementById ('textoFinal').innerHTML = textoEncriptado;
        document.querySelector('.boton__copiar').style.display = 'inline-block';    
    }
    actualizarOutput();
    document.getElementById('notificacion').innerHTML ='';
}

//Inicializa visibilidad de imagen en el campo area__salida
actualizarOutput();

//Esta funcióm lee el texto textarea, llama a la funcion validacionTexto,
//si el texto es inválido, genera un alert para notificar al usuario,
//si el texto es válido, desencripta y devuelve el texto desencriptado
function desencriptador () {
    let textoCapturado = document.getElementById('textoIngresado').value;
    textoValidado = validacionTexto(textoCapturado);

    if (textoValidado === aviso) {
        alert(aviso);
        return; 
    } else {
        for (let llave in LLAVE_DE_DESENCRIPTACION) {
            caracterRevelado = LLAVE_DE_DESENCRIPTACION[llave];
            textoValidado = textoValidado.split(llave).join(caracterRevelado);
        }
        document.getElementById('textoFinal').innerHTML = textoValidado;
        document.querySelector('.boton__copiar').style.display = 'inline-block';  
    }
    actualizarOutput()
    document.getElementById('notificacion').innerHTML ='';
}

//Esta función permite copiar el texto generado y muestra un mensaje de confirmación al usuario
//Si no se copia el texto, tambien muestra un mensaje de notificacion del error
function copiarTexto (){
    let textoEnPortapapeles = document.getElementById('textoFinal').textContent;

    if (textoEnPortapapeles === ''){
        document.getElementById('notificacion').innerHTML = 'No hay un texto a copiar';
    } else {
        navigator.clipboard.writeText(textoEnPortapapeles)
        .then(function copiado () {
            document.getElementById('notificacion').innerHTML = 'Texto copiado!';
        })
        .catch(function noCopiado (err) {
            document.getElementById('notificacion').innerHTML = 'Texto no copiado:' + err;
        });
    }
}

//Esta función reinicia la app borrando el contenido de textoIngresado
//así como el texto mostrado en textoFinal además del reset de dos variables 
//que pueden contener texto generado si el usuario ya uso la app
function reiniciar (){
    document.getElementById('textoIngresado').focus();
    document.getElementById('textoIngresado').value = '';
    document.getElementById('textoFinal').innerHTML = '';
    document.getElementById('estatusApp').innerHTML = 'Se ha reiniciado la app';
    document.getElementById('notificacion').innerHTML ='Para usar esta app ingresa el texto que desees, después pulsa los botones de encriptar o desencriptar';
    document.querySelector('.boton__copiar').style.display = 'none';
    textoValidado = '';
    textoEncriptado = '';
    actualizarOutput()
}