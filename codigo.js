function cargar(){
    document.getElementById("texto").style.display = "none";
}


function validarEntrada(){
    let audio_intro = document.getElementById("audio-intro");
    audio_intro.play();
    setTimeout(() => {
        //Aparece texto
        document.getElementById("texto").style.display = "flex";
        //Desaparece intro, el que tiene el boton de comenzar 
        document.getElementById("intro").style.display = "none";

        document.getElementById("primero").textContent = "BIENVENIDOS A...";
    }, 4000);
    
    setTimeout(() => {
        document.getElementById("primero").textContent = "";
        document.getElementById("segundo").textContent = `LA MEJOR PRODUCCION AUDIOVISUAL`
        
    }, 7000);
    
    setTimeout(() => {
        document.getElementById("segundo").textContent = "";
        document.getElementById("tercero").textContent = "HECHA POR SUBBATOQUES PRODUCTIONS";
    }, 10000);

    setTimeout(() => {
        document.getElementById("tercero").textContent = "";
        document.getElementById("cuarto").textContent = "ACOMODAOS SI NO LO ESTABAIS YA";
    }, 13000);

    setTimeout(() => {
        document.getElementById("cuarto").textContent = "";
        document.getElementById("quinto").textContent = "MENCIONES ESPECIALES A: ";
    }, 16000);

    setTimeout(() => {
        document.getElementById("quinto").textContent = "";
        document.getElementById("sexto").style.display = "inline" ;
    }, 19000);

    setTimeout(() => {
        document.getElementById("sexto").textContent = "";
        document.getElementById("final-diapo").style.display = "flex";  
    }, 25000); 
}

function continuar() {  
    let audio_intro = document.getElementById("audio-intro");
    audio_intro.pause();

    let audio_continuar = document.getElementById("audio-continuar");
    audio_continuar.play();

    document.getElementById("final-diapo").style.display = "none";
    setTimeout(() => {
        document.getElementById("cuerpo").style.display = "flex";
        let audio = document.getElementById("audio-elegir");
        audio.play();
    }, 3000);
}

function suenaRuso() {
    let audio_ruso = document.getElementById("audio-ruso");
    audio_ruso.play();
}

function suenaGundebag(){
    let audio = document.getElementById("audio-gundebag");
    audio.play();
}

function suenaEmpresario(){
    let audio = document.getElementById("audio-empresario");
    audio.play();
}

function suenaHolas(){
    let audio = document.getElementById("audio-holas");
    audio.play();
}

function suenaBaldosazo(){
    let audio = document.getElementById("audio-baldosazo");
    audio.play();
}

function suenaNariz(){
    let audio = document.getElementById("audio-nariz");
    audio.play();
}

function suenaMoto(){
    let audio = document.getElementById("audio-moto");
    audio.play();
}
function suenaHumana(){
    let audio = document.getElementById("audio-humana");
    audio.play();
}
function suenaGafas(){
    let audio = document.getElementById("audio-gafas");
    audio.play();
}
