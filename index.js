const botonSimon = document.getElementById('simon');
const botonNelson = document.getElementById('nelson');




const somosAlgo = () =>{
    //alert("Somos Novios");
    location.href=href="https://wa.me/524431283102/?text=¡¡Hola!!, claro que me gustaría ir por unos taquitos contigo. ¿A qué hora nos vemos?"

}


const evitarCoraRoto = () =>{
    botonNelson.style.position = 'absolute';
    botonNelson.style.top = (Math.random()* window.innerHeight) - 85 + 'px';
    botonNelson.style.left = (Math.random()* window.innerWidth) - 85 + 'px';
}

botonSimon.addEventListener('click', somosAlgo);
botonNelson.addEventListener('mouseover', evitarCoraRoto);