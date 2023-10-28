const cantLados = document.getElementById("cantLados");
const longi = document.getElementById("longi");
const botonLado = document.getElementById("funCL");
const divi = document.getElementById("res");
const btnReset = document.getElementById('btnReset');
const divi2 = document.getElementById("res2");
const botonarea = document.getElementById("areabtn");


botonLado.addEventListener('click', function (e) {
    e.preventDefault();
    determinarFigura();
})

function determinarFigura() {
    const lado = cantLados.value;
    const texto = document.createElement("div");
    let img;

    switch (lado) {
        case "0":
        case "1":
        case "2": alert("Todo mal pa. No hay figuras de menos de 3 lados, gil.");
            break;

        case "3":
            img = 3;
            texto.innerHTML = `<h4>La figura con 3 lados es un triangulo</h4><img class="imagenF" src="../img/${img}.png" alt="imagen">`;
            divi.appendChild(texto);
            break;

        case "4":
            img = 4;
            texto.innerHTML = `<h4>La figura con 3 lados es un cuadrado</h4><img class="imagenF" src="../img/${img}.png" alt="imagen">`;
            divi.appendChild(texto);
            break;

        case "5":
            img = 5;
            texto.innerHTML = `<h4>La figura con 3 lados es un pentagono</h4><img class="imagenF" src="../img/${img}.png" alt="imagen">`;
            divi.appendChild(texto);
            break;

        case "6":
            img = 6;
            texto.innerHTML = `<h4>La figura con 3 lados es un hexagono</h4><img class="imagenF" src="../img/${img}.png" alt="imagen">`;
            divi.appendChild(texto);
            break;
        case "7":
            img = 7;
            texto.innerHTML = `<h4>La figura con 3 lados es un heptagono</h4><img class="imagenF" src="../img/${img}.png" alt="imagen">`;
            divi.appendChild(texto);
            break;
        case "8":
            img = 8;
            texto.innerHTML = `<h4>La figura con 3 lados es un octagono</h4><img class="imagenF" src="../img/${img}.png" alt="imagen">`;
            divi.appendChild(texto);
            break;
        default:
            img = "error";
            texto.innerHTML = `<h4>solo llegamos a la figura de 8 lados compadre :C </h4><img class="imagenF" src="../img/${img}.png" alt="imagen">`;
            divi.appendChild(texto);
            break;
    }
    divi.innerHTML = "";
    divi.appendChild(texto);
}

function calcularPerimetro() {
    const longiR = longi.value;
    let resultado;
    const lado = cantLados.value;
    if (lado >= 3 && lado <= 8) {
        resultado = lado * longiR
        const titulores = document.createElement("h5");
        titulores.innerHTML = `el perimetro es igual a ${resultado}`
        res2.appendChild(titulores);
    }
    else {
        alert("Debe ingresar primero los lados de la figura");
    }
}


btnReset.addEventListener('click', (e) => {
    e.preventDefault();
    reset();
})

botonarea.addEventListener('click', (e) => {
    e.preventDefault();
    calcularPerimetro();
})


function reset() {
    cantLados.value = "";
    const texto = document.createElement("div");
    divi.innerHTML = "";
    divi.appendChild(texto);
    longi.value = "";
    const logiR = document.createElement("h5");
    res2.innerHTML= "";
    res2.appendChild(logiR);
}
