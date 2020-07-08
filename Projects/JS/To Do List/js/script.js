// Declaración constantes

const misListas = document.querySelector('[data-lists]')
const nuevaListaForm = document.querySelector('[data-nueva-lista-form]')
const nuevaListaInput = document.querySelector('[data-nueva-lista-input]')

// Para guardar las listas en el Local Storage del Navegador, y evitar que se pierdan las mismas

const LOCAL_STORAGE_LIST_KEY = 'lista.pendientes'
let listas = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [] 

// CREAR NUEVA LISTA

nuevaListaForm.addEventListener('submit', e => {
    e.preventDefault()
    const nombreLista = nuevaListaInput.value
    if(nombreLista == null || nombreLista === '') return
    const lista = createList(nombreLista)
    nuevaListaInput.value = null
    listas.push(lista)
    saveAndRender()
})

function createList(nombre) {
    return { id: Date.now().toString(), nombre: nombre, pendiente: []}
}

function saveAndRender () {
    save()
    render()
}

function save () {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(listas))
}

function render() {
    limpiarElementos(misListas)
    listas.forEach(listas => {
        const elementoLista = document.createElement('li')
        elementoLista.dataset.listId = listas.id
        elementoLista.classList.add("nombre-lista")
        elementoLista.innerText = listas.nombre
        misListas.appendChild(elementoLista)
    })
}

// LIMPIAR LISTAS

function limpiarElementos(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()