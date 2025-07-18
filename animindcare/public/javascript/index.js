document.addEventListener('DOMContentLoaded', function () {
    const ventana = document.getElementById("login_ventana"); // se busca el elemento login_ventana desde el html y se guarda en la constante ventana
    const abrir_ventana = document.getElementById("abrir_login"); // se busca el elemnto abrir_login y se crea la constante de abrir_ventana
    const cerrar_ventana = document.getElementById("cerrar_login"); // se busca el elemento cerrar_login y se guarda
    const params = new URLSearchParams(window.location.search); // se obtienen los parámetros de la URL
    const alertbox = document.querySelector(".alert-container"); // se selecciona el contenedor de la alerta
    const boton = document.querySelector(".boton-login"); // se selecciona el botón de ingresar
    const contenedor = document.querySelector('.ventana-contenido'); // se selecciona el contenedor del modal
    const email = document.querySelector('input[name="email"]'); // se selecciona el campo de correo
    const passInput = document.querySelector('input[name="contraseña"]'); // se selecciona el campo de contraseña

    // se guarda si ya se ha movido o no
    let botonMovido = false;

    abrir_ventana.addEventListener('click', function () {
        ventana.style.display = 'flex'; // al hacer click en abrir_login se muestra la ventana (cambia display de none a flex)
    });

    cerrar_ventana.addEventListener('click', function () {
        ventana.style.display = 'none'; // al hacer click en cerrar_login se oculta la ventana
    });

    window.addEventListener('click', function (e) {
        if (e.target === ventana) {
            ventana.style.display = 'none'; // si se hace click fuera del contenido, también se cierra el modal
        }
    });

    if (params.get('login') === '1') {
        ventana.style.display = "flex"; // si en la URL viene ?login=1 se abre el modal automáticamente
    }

    if (alertbox) {
        alertbox.classList.add("show"); // se agrega la clase show para mostrar la alerta

        setTimeout(() => {
            alertbox.classList.remove("show"); // después de 4 segundos se remueve la clase show y desaparece la alerta
        }, 4000);
    }

    boton.addEventListener('mouseover', function () {
        const emailVacio = email.value.trim() === ''; // se evalúa si el campo email está vacío (trim elimina espacios al inicio y final)
        const passVacio = passInput.value.trim() === ''; // se evalúa si el campo contraseña está vacío

        if (emailVacio || passVacio) {
            botonMovido = true;

            boton.classList.add('mover'); // se agrega la clase mover (que tiene animación en CSS)

            setTimeout(() => {
                boton.classList.remove('mover'); // se remueve la clase mover después de 400ms para poder reutilizar la animación
            }, 100);

            const contRect = contenedor.getBoundingClientRect(); // dimensiones del contenedor (donde se puede mover el botón)
            const botonRect = boton.getBoundingClientRect(); // dimensiones del botón

            const maxX = contRect.width - botonRect.width; // máximo que se puede mover en horizontal
            const maxY = contRect.height - botonRect.height; // máximo que se puede mover en vertical

            const randomX = Math.floor(Math.random() * maxX); // posición aleatoria horizontal
            const randomY = Math.floor(Math.random() * maxY); // posición aleatoria vertical

            boton.style.position = 'absolute'; // se establece posición absoluta para poder moverlo dentro del contenedor
            boton.style.left = `${randomX}px`; // se aplica la posición horizontal aleatoria
            boton.style.top = `${randomY}px`; // se aplica la posición vertical aleatoria
        } else if (botonMovido) {
            // si ya hay algo escrito y el botón fue movido, lo devolvemos a su lugar
            boton.style.position = ''; // vuelve al flujo normal del contenedor (centrado por el CSS)
            boton.style.left = '';
            boton.style.top = '';
            botonMovido = false;
        }
    });
});
