function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    // Mapeo para encriptar cada letra y número
    const mapaEncriptacion = {
        'a': 'ai', 'b': 'beto', 'c': 'ceco', 'd': 'deco', 'e': 'enter',
        'f': 'fefo', 'g': 'gego', 'h': 'heho', 'i': 'imes', 'j': 'jijo',
        'k': 'keko', 'l': 'lelo', 'm': 'mimo', 'n': 'neno', 'ñ': 'ñeñe',
        'o': 'ober', 'p': 'pepo', 'q': 'quiqu', 'r': 'roro', 's': 'sese',
        't': 'tete', 'u': 'ufat', 'v': 'veve', 'w': 'wowo', 'x': 'xixi',
        'y': 'yiyi', 'z': 'zizi',
        '0': 'dfwgq', '1': 'wetqg', '2': 'aereafe', '3': 'pmfien',
        '4': 'ijomñs', '5': 'bikrvrw', '6': 'kmskfk', '7': 'ogkrng',
        '8': 'kosbher', '9': 'jdytnwe'
    };

    let textoCifrado = texto.split('').map(char => mapaEncriptacion[char] || char).join('');

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/encriptado.jpg";
        // Añadir clases específicas para el texto e imagen ajustados
        tituloMensaje.classList.add("js-adjusted-text");
        parrafo.classList.add("js-adjusted-text");
        muñeco.classList.add("js-adjusted-img");
    } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
        // Añadir clases específicas para el texto e imagen ajustados
        tituloMensaje.classList.add("js-adjusted-text");
        parrafo.classList.add("js-adjusted-text");
        muñeco.classList.add("js-adjusted-img");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    // Mapeo para desencriptar cada letra y número
    const mapaDesencriptacion = {
        'ai': 'a', 'beto': 'b', 'ceco': 'c', 'deco': 'd', 'enter': 'e',
        'fefo': 'f', 'gego': 'g', 'heho': 'h', 'imes': 'i', 'jijo': 'j',
        'keko': 'k', 'lelo': 'l', 'mimo': 'm', 'neno': 'n', 'ñeñe': 'ñ',
        'ober': 'o', 'pepo': 'p', 'quiqu': 'q', 'roro': 'r', 'sese': 's',
        'tete': 't', 'ufat': 'u', 'veve': 'v', 'wowo': 'w', 'xixi': 'x',
        'yiyi': 'y', 'zizi': 'z',
        'dfwgq': '0', 'wetqg': '1', 'aereafe': '2', 'pmfien': '3',
        'ijomñs': '4', 'bikrvrw': '5', 'kmskfk': '6', 'ogkrng': '7',
        'kosbher': '8', 'jdytnwe': '9'
    };

    // Usar expresiones regulares para reemplazar en el orden correcto
    let textoDesencriptado = texto;
    const clavesOrdenadas = Object.keys(mapaDesencriptacion).sort((a, b) => b.length - a.length);
    clavesOrdenadas.forEach(clave => {
        const regex = new RegExp(clave, 'gi');
        textoDesencriptado = textoDesencriptado.replace(regex, mapaDesencriptacion[clave]);
    });

    if (texto.length != 0) {
        document.getElementById("texto").value = textoDesencriptado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/desencriptado.jpg";
        // Añadir clases específicas para el texto e imagen ajustados
        tituloMensaje.classList.add("js-adjusted-text");
        parrafo.classList.add("js-adjusted-text");
        muñeco.classList.add("js-adjusted-img");
    } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar un texto", "warning");
        // Añadir clases específicas para el texto e imagen ajustados
        tituloMensaje.classList.add("js-adjusted-text");
        parrafo.classList.add("js-adjusted-text");
        muñeco.classList.add("js-adjusted-img");
    }
}

//seguridad//

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});