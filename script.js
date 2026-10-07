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

//task3

botonEnlaces.addEventListener("click", () => {
    const enlaces = document.querySelectorAll("a");

    const total = enlaces.length;
    const primero = enlaces[0].href;
    const ultimo = enlaces[total - 1].href;

    alert(
        `Total enlaces: ${total}\n` +
        `Primer enlace: ${primero}\n` +
        `Último enlace: ${ultimo}`
    );
});


