 // Aquí tu código

 const button = document.getElementById("agregar")
 const lista = document.getElementById("lista")


 
 button.addEventListener("click", function(){
    const peliculas = prompt("¿Cuáles son tus películas favoritas");
    if (peliculas) {
        const li = document.createElement("li");
        lista.appendChild(li);
        li.textContent = peliculas;
        li.classList.add("nuevaPeli")
    }
    })