// Selección de elementos del DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

// Función para agregar un capítulo a la lista
button.addEventListener('click', () => {
    // Verificar que el input no esté vacío
    if (input.value.trim() === '') {
        alert('Please enter a chapter name you scum.');
        return;
    }

    // Crear elementos de lista y botón de eliminación
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Asignar valores y atributos
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

    // Agregar el botón al <li>
    li.appendChild(deleteButton);
    
    // Agregar el <li> a la lista
    list.appendChild(li);

    // Limpiar el input y enfocarlo nuevamente
    input.value = '';
    input.focus();

    // Evento para eliminar un capítulo de la lista
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
    });
});
