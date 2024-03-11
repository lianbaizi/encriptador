//Implemetando encriptador de palabras


function encriptar(palabra) {
    palabra = palabra.toLowerCase()
    const encriptacion = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    let resultado = '';

    for (let letra of palabra) {
        if (letra in encriptacion) {
            resultado += encriptacion[letra];
        } else {
            resultado += letra;
        }
    }

    return resultado;
}

function desencriptar(textoEncriptado) {
    const desencriptacion = {
        'ai': 'a',
        'enter': 'e',
        'ober': 'o',
        'ufat': 'u',
        'imes':'i'
    };

    let resultado = '';
    let i = 0;

    for (let i = 0; i < textoEncriptado.length;) {
        let posibleVocal = textoEncriptado.substr(i, 4); // La secuencia más larga posible es de 4 caracteres

        if (posibleVocal in desencriptacion) {
            resultado += desencriptacion[posibleVocal];
            i += posibleVocal.length;
        } else {
            resultado += textoEncriptado[i];
            i++;
        }
    }

    return resultado;
}
//let textoEncriptado = 'gaitober';
//console.log(desencriptar(textoEncriptado));
function desen(texto){
    function textoALista(texto) {
        // Utilizamos una expresión regular para encontrar todas las palabras en el texto
        const palabras = texto.match(/\b\w+\b/g);
        return palabras || []; // Devolvemos la lista de palabras o una lista
        //                        vacía si no se encontraron palabras
    }

    let conjunto=textoALista(texto);
    let resultado = '';
   
    for (let i =0; i < conjunto.length; i++) {

        let lower = conjunto[i].toLowerCase();
        lower = lower.replace('ai','a');
        lower = lower.replace('enter','e');
        lower = lower.replace('ober','o');
        lower = lower.replace('ufat','u');
        lower = lower.replace('imes','i');
        resultado += ' ' + lower;
        
    }
    return resultado;
}


//let texto = "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!";
//console.log(desen(texto));
function desencriptarPalabra(palabraEncriptada) {
    // Reemplazando las letras encriptadas según las reglas de desencriptación
    let palabraDesencriptada = palabraEncriptada
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    
    return palabraDesencriptada;
  }
  
  let palabraEncriptada = "fenterlimescimesdaidenters"; // Ejemplo de palabra encriptada
  let palabraDesencriptada = desencriptarPalabra(palabraEncriptada);
  console.log("Palabra encriptada:", palabraEncriptada);
  console.log("Palabra desencriptada:", palabraDesencriptada);
  