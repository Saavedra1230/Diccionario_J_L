import dictionary from './dictionary.js';

// Cargar el diccionario desde localStorage o usar el diccionario por defecto
const loadDictionary = () => {
  const storedDictionary = localStorage.getItem('dictionary');
  return storedDictionary ? JSON.parse(storedDictionary) : dictionary;
};

const currentDictionary = loadDictionary();

// Función para mostrar la lista de palabras en una tabla
export const tableList = (selectedCategory) => {
  const tableBody = document.getElementById("listaPalabras");
  tableBody.innerHTML = "";
  const words = currentDictionary.categories[selectedCategory];
  words.forEach(word => {
    const row = document.createElement("tr");
    const ingles = document.createElement("td");
    ingles.textContent = word["english"];
    const español = document.createElement("td");
    español.textContent = word["spanish"];
    const ejemplo = document.createElement("td");
    ejemplo.textContent = word["example"];
    row.appendChild(ingles);
    row.appendChild(español);
    row.appendChild(ejemplo);
    tableBody.appendChild(row);
  });
};

// Evento para cambiar la categoría seleccionada y mostrar la lista de palabras
document.querySelectorAll('.botonCategoria').forEach(button => {
  button.addEventListener('click', () => {
    const selectedCategory = button.id;
    tableList(selectedCategory);
  });
});

// Genera la tabla para una categoría predeterminada
tableList("animals");

