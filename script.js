//task1
const botonEstilo = document.getElementById("botonEstilo");
const parrafo = document.getElementById("parrafo");

botonEstilo.addEventListener("click", () => {
    parrafo.style.fontFamily = "Arial, sans-serif";
    parrafo.style.fontSize = "24px";
    parrafo.style.color = "orange";
});

//task2

const formulario = document.getElementById("form1");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = formulario.fname.value;
    const apellido = formulario.lname.value;

    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
});

