function cargar(){
    setTimeout(() => {
        document.getElementById("primero").textContent = "BIENVENIDOS A...";
    }, 1000);
    
    setTimeout(() => {
        document.getElementById("primero").textContent = "";
        document.getElementById("segundo").textContent = "LA MEJOR PRODUCCION AUDIOVISUAL";
        
    }, 3000);

    setTimeout(() => {
        document.getElementById("segundo").textContent = "";
        document.getElementById("tercero").textContent = "HECHA POR SUBBATOQUES PRODUCTIONS";
        
    }, 5000);
}



