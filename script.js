const botonTema = document.getElementById("boton-tema");

function actualizarBoton() {
    if (document.body.classList.contains("claro")) {
        botonTema.textContent = "🌙 Cambiar al modo oscuro";
    } else {
        botonTema.textContent = "☀️ Cambiar al modo claro";
    }
}

function cargarTema() {
    const tema = localStorage.getItem("tema");

    if (tema === "claro") {
        document.body.classList.add("claro");
    }
}

botonTema.addEventListener("click", function() {

    document.body.classList.toggle("claro");

    if (document.body.classList.contains("claro")) {
        localStorage.setItem("tema", "claro");
    } else {
        localStorage.setItem("tema", "oscuro");
    }

    actualizarBoton();
});

cargarTema();
actualizarBoton();