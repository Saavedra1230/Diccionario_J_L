import dictionary from './dictionary.js';

// Cargar el diccionario desde localStorage o usar el diccionario por defecto
const loadDictionary = () => {
    const storedDictionary = localStorage.getItem('dictionary');
    return storedDictionary ? JSON.parse(storedDictionary) : dictionary;
};

// Guardar el diccionario en localStorage
const saveDictionary = (dict) => {
    localStorage.setItem('dictionary', JSON.stringify(dict));
};

let currentDictionary = loadDictionary();

// Función para agregar una palabra al diccionario y guardarla en localStorage
const addWordToDictionary = (category, englishWord, spanishWord, example) => {
    const newWord = {
        id: currentDictionary.categories[category].length + 1,
        english: englishWord,
        spanish: spanishWord,
        example: example
    };

    // Agregar la nueva palabra al diccionario
    currentDictionary.categories[category].push(newWord);
    // Guardar el diccionario actualizado en localStorage
    saveDictionary(currentDictionary);
};

// Evento para manejar el envío del formulario
document.getElementById('add-word-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const category = document.getElementById('category-select').value;
    const englishWord = document.getElementById('english-word').value;
    const spanishWord = document.getElementById('spanish-word').value;
    const example = document.getElementById('example').value;

    addWordToDictionary(category, englishWord, spanishWord, example);

    document.getElementById('add-word-form').reset();
});
