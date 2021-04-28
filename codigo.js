var playPromise = document.querySelector('video').play();

// In browsers that don’t yet support this functionality,
// playPromise won’t be defined.
if (playPromise !== undefined) {
  playPromise.then(function() {
    // Automatic playback started!
  }).catch(function(error) {
    // Automatic playback failed.
    // Show a UI element to let the user manually start playback.
  });
}

function cargar(){
    document.getElementById("texto").style.display = "none";
}


function validarEntrada(){
    var audio_intro = document.getElementById("audio-intro");
    audio_intro.play();
    setTimeout(() => {
        //Aparece texto
        document.getElementById("texto").style.display = "flex";
        //Desaparece intro, el que tiene el boton de comenzar 
        document.getElementById("intro").style.display = "none";

        document.getElementById("primero").textContent = "BIENVENIDOS A...";
    }, 2000);
    
    setTimeout(() => {
        document.getElementById("primero").textContent = "";
        document.getElementById("segundo").textContent = `LA MEJOR PRODUCCION AUDIOVISUAL`
        
    }, 5000);
    
    setTimeout(() => {
        document.getElementById("segundo").textContent = "";
        document.getElementById("tercero").textContent = "HECHA POR SUBBATOQUES PRODUCTIONS";
    }, 8000);

    setTimeout(() => {
        document.getElementById("tercero").textContent = "";
        document.getElementById("cuarto").textContent = "ACOMODAOS SI NO LO ESTABAIS YA";
    }, 11000);

    setTimeout(() => {
        document.getElementById("cuarto").textContent = "";
        document.getElementById("quinto").textContent = "PORQUE LO QUE SE VIENE NO ES NI MEDIO NORMAL";
    }, 14000);

    setTimeout(() => {
        document.getElementById("quinto").textContent = "";
        document.getElementById("sexto").textContent = `VOCES: @angeldm9 IMAGEN: @angeldm9  IDEA ORIGINAL: YO  TODO LO DEMAS: YO` ;
    }, 17000);

    setTimeout(() => {
        document.getElementById("sexto").textContent = "";
        document.getElementById("septimo").textContent = `SEAN BIENVENIDOS A...` ;
    }, 23000);

    setTimeout(() => {
        document.getElementById("sexto").textContent = "";
        document.getElementById("septimo").textContent = `EN CONSTRUCCION`;
    }, 29000);
    

}



