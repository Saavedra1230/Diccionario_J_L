import dictionary from './dictionary.js';

export const translate = () => {
    // Interacción con el formulario
    const form = document.getElementById('formulario-traducir');
    const traduccion = document.getElementById('traduccion');
    const ejemplo = document.getElementById('ejemplo');

    // Actualización de los espacios de traducción y ejemplo
    const resultado = (resultados, ejem) => {
        traduccion.textContent = resultados;
        ejemplo.textContent = ejem;
    }

    // Busca la palabra y revisa el idioma (si es ingles o español)
    const buscarPalabra = (palabra, modo) => {
        // ? : True o False
        // Si es ingles el idioma destino es español
        // Si es español el idioma destino es ingles
        const idiomaDestino = modo === 'english' ? 'spanish' : 'english';

        // Recorre todas las categorías
        for (const categoria in dictionary.categories) {
            // Recorre los objetos de cada categoría
            for (const entrada of dictionary.categories[categoria]) {
                // Si la palabra coincide con la del idioma de origen o la palabra que se ingreso
                const palabraDic = entrada[modo];
                if (palabraDic && palabraDic.toLowerCase().trim() === palabra.toLowerCase().trim()) {
                    // Devuelve la traducción y el ejemplo
                    return [entrada[idiomaDestino], entrada.example];
                }
            }
        }
        return ["Traducción no encontrada", 'Ejemplo no encontrado'];
    }


    const manejoFormulario = (evento) => {
        evento.preventDefault();
        
        // Captura la palabra y el modo seleccionado
        const palabra = document.getElementById('palabra').value;
        const modo = document.getElementById('modo').value;

        // Desectruccion de array, para asi buscar la traduccion de la palabra en el diccionario, tomando la sintaxis que tiene el buscarPalabra
        const [resultados, ejem] = buscarPalabra(palabra, modo);

        resultado(resultados, ejem);
    }

    form.addEventListener('submit', manejoFormulario);

}

translate();
