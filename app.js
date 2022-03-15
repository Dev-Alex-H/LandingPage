function name() {
    // let element = document.styleSheets;
    // let links = document.links;
    // let imagenes = document.images;
    // let formularios = document.forms;

    // console.log(element);
    // console.log(links);
    // console.log(imagenes);
    // console.log(formularios);
    // console.log();

    // const padre = document.querySelector('ul');
    // const abuelo = document.querySelector('ul.listas-cursos > li.list')

    // const hermanos = document.querySelector('ul.listas-cursos > li.list')

    // console.log(padre.childElementCount);
    // console.log(padre.lastElementChild);
    // console.log(padre.firstElementChild);
    // console.log(padre.children);
    // console.log(abuelo.parentElement.parentElement);
    // console.log(hermanos.nextElementSibling)

    // elemento.innerHTML = 'Clases para el 2021'; innerHTML se usa para modificar el elemento del document

    // console.log(elemento);

    // const contactos = document.getElementById('contactos');

    // console.log(contactos);

    // const h1s = document.getElementsByTagName('h1');

    // console.log(h1s);

    // const detalles = document.getElementsByClassName('detalles');

    // console.log(detalles);

    // const nodeList = document.querySelectorAll('section');// devuelve un nodelist
    // // con querySelect o querySelectAll debemos poner # para id y . para clase
    // console.log(nodeList); //algunas funciones no funcionan con node list (como map)

    // const padre = document.querySelector('section.detalles');

    // console.log(padre);

    // const nuevoNodo = document.createElement('h2');

    // padre.appendChild(nuevoNodo);

    // const texto = document.createTextNode('Caracteristicas especiales');

    // nuevoNodo.appendChild(texto);
    // padre.append('Modelos nuevos', document.createElement('p'));

    // const nuevo = document.createElement('h2');

    // const limite = document.querySelector('section.detalles > div.caja-contenedor');

    // padre.insertBefore(nuevo, limite);

    // nuevo.appendChild(document.createTextNode('Nuevo texto sin variable'));

    // const textoNuevo = document.createTextNode('Nuevo p creado');

    // const nodo_adjunted = document.createElement('p');

    // nodo_adjunted.appendChild(textoNuevo);

    // limite.insertAdjacentElement('beforebegin', nodo_adjunted);
    // limite.insertAdjacentElement('afterbegin', nodo_adjunted);
    // limite.insertAdjacentElement('beforeend', nodo_adjunted);
    // limite.insertAdjacentElement('afterend', nodo_adjunted);

    // const eliminar_titulo = document.querySelector('section.precios > div.caja-contenedor > div.caja > h3.titulo');

    // console.log(eliminar_titulo);

    // const padre_elim = document.querySelector('section.precios > div.caja-contenedor > div.caja');

    // const remplazo = document.createElement('h2');

    // remplazo.appendChild(document.createTextNode('Remplazo de texto con replaceChild'));

    // padre_elim.removeChild(eliminar_titulo);

    // padre_elim.replaceChild(remplazo, eliminar_titulo);

    // const imagenes = document.querySelectorAll('img');//devuelve una coleccion de nodos "nodeList" (no es un array)

    // console.log(imagenes);
    // console.log(imagenes.length, imagenes.map);

    //HTMLCollection coleccion de elementos html

    // const coleccionHtml = document.getElementsByTagName('h1');

    // console.log(coleccionHtml, coleccionHtml.length, coleccionHtml.map);

    //La diferencia de una NodeList y Htmlcollection es que los nodos son todo 
    //lo que contiene la pagina (texto, y demas) pero el elemento es solo una etiqueta HTML

    //Transformar las estructuras en arrays

    // const arraynodes = [...imagenes];

    // console.log(arraynodes.map);

    //otra forma de hacerlo

    // const arraynodesdos = Array.from(document.querySelectorAll('img'));

    // console.log(arraynodesdos);

    // const arraycolHtml = Array.from(document.getElementsByTagName('h1'));

    // console.log(arraycolHtml);

    //ATRIBUTOS = Se utilizan al iniciar una etiqueta HTML
    //PROPIEDAD = Es el mismo atributo pero cuando cambiamos 
    //algo se convierte en propiedad

    // const inputSus = document.querySelectorAll('div.suscribete > form > input');

    // console.log(inputSus);

    // const arrayInp = Array.from(inputSus);

    // const inputSubmit = arrayInp[1];

    // console.log(inputSubmit.value);

    // inputSubmit.value = 'Hola';

    // console.log(inputSubmit.value);

    // const nuevoElemento = document.createElement('a');

    // nuevoElemento.className = 'clase';

    // nuevoElemento.id = 'nuevoId';

    // nuevoElemento.setAttribute('href', '#');

    // nuevoElemento.textContent = 'Nuevo';

    // const padre = document.querySelector('header > nav');

    // padre.insertAdjacentElement('beforebegin', nuevoElemento);

    // padre.appendChild(nuevoElemento);

    //**********************EVENTOS**************************//

    // const enviar = document.getElementById('mensaje');

    // enviar.addEventListener('click', ()=>{
    //     alert('Mensaje enviado');
    // });

    // enviar.addEventListener('click', ()=>{
    //     alert('Mensaje guardado');
    // });

    // const inputEnviar = document.querySelector('section.contactos > form > input');

    // const evento = () => {
    //     console.log('Numero de clicks');
    // }

    // inputEnviar.addEventListener('click', evento);

    // const nombre = document.querySelector('section.contactos > form > div.inputcaja > input');

    // const eventNombre = () => {
    //     console.log(`Número de letras`);
    // }

    // nombre.addEventListener('input', eventNombre);

    // nombre.removeEventListener('input', eventNombre);

    // inputEnviar.removeEventListener('click', evento);

    // inputEnviar.addEventListener('click', () => {
    //     console.log('Evento tres');
    // });

    // EL PROBLEMA CON LAS FUNCIONES ANONIMAS ES QUE NO SE PUEDEN 
    //ELIMINAR CON EL removeEventListener()

    // EVENTOS CON EL MOUSE

    // function evento() {
    //     alert('Mensaje enviado');
    //     return false;
    // }

    // const caja = document.getElementById('caja');

    // caja.addEventListener('click', evento);

    // caja.oncontextmenu = evento;

    // caja.ondblclick = evento;

    // caja.onmousedown = evento; //funciona cuando se presiona el boton

    // caja.onmouseup = evento; //funciona cuando se deja de presionar el boton

    // caja.onmouseenter = evento;

    // caja.onmouseleave = evento;

    // caja.onmousemove = evento;

    // EVENTOS DE TECLADO !!! IMPORTANTE

    // const entrada = document.getElementById('input');

    // entrada.addEventListener('keydown', evento);

    // function evento(e) {
    //     if (e.key === 'x') {
    //         console.log('Presionaste la tecla correcta');
    //     }
    // }
    // const formulario = document.getElementById('formI');

    // formulario.addEventListener('submit', evento);

    // function evento(e) {
    //     e.preventDefault();
    //     const emaili = document.querySelector('form#formI > input').value;
    //     console.log(emaili);
    // }
    // const formulario = document.getElementById('formI');

    // const activabox = document.getElementById('activador');

    // activabox.addEventListener('change', evento);

    // function evento(e) {
    //     e.target.checked === true? console.log('Evento activado'): alert('Acepte los terminos y condiciones');
    // }

    // const videoMp4 = document.getElementById('videoa'),
    //     playa = document.getElementById('play'),
    //     pausea = document.getElementById('pause');

    // playa.addEventListener('click', eventoPlay);

    // pausea.addEventListener('click', eventoPause)

    // function eventoPause() {
    //     videoMp4.pause();
    // }

    // function eventoPlay() {
    //     videoMp4.play();
    // }

    // for (let i = 0; i < 80; i++) {
    //     const nodo = document.createElement('input');
    //     nodo.value = i + 1;
    //     document.body.appendChild(nodo);
    // }
    // const nodos = [];

    // for (let i = 0; i < 80; i++) {
    //     const nodo = document.createElement('input');
    //     nodo.value = i + 1;
    //     nodos.push(nodo);
    // }
    // document.body.append(...nodos);
    // const padre = document.getElementById('padre');
    // const nietoDos = document.getElementById('nieto2');

    // console.log('Elementos hijos:', padre.children);
    // console.log('Nodos hijos:', padre.childNodes);
    // console.log('Primer nodo hijo:', padre.firstChild);
    // console.log('Primer elemento hijo:', padre.firstElementChild);
    // console.log('Ultimo nodo hijo:', padre.lastChild);
    // console.log('Ultimo elemento hijo:', padre.lastElementChild);
    // console.log('NIETOS')
    // console.log('Siguiente nodo hermano:', nietoDos.nextSibling);
    // console.log('Siguiente elemento hermano:', nietoDos.nextElementSibling);
    // console.log('Anterior nodo hermano:', nietoDos.previousSibling);
    // console.log('Anterior elemento hermano:', nietoDos.previousElementSibling);
    // console.log('Elemento padre del nuestro:', nietoDos.parentElement);
    // console.log('Elemento abuelo del nuestro:', nietoDos.parentElement.parentElement);
}