document
.getElementById("formulario")
.addEventListener("submit", function(e){
    e.preventDefault();

    const nombre = document.querySelector('input[name="nombre"]');
    const apellido = document.querySelector('input[name="apellido"]');
    const email = document.querySelector('input[name="email"]');
    const telefono = document.querySelector('input[name="telefono"]');
    const usuario = document.querySelector('input[name="usuario"]');
    const password = document.querySelector('input[name="password"]');

    const campos = [nombre, apellido, email, telefono, usuario, password];
    let valido = true;

    campos.forEach(campo => {
        if (!campo || campo.value.trim().length === 0) {
            campo.classList.add('error');
            valido = false;
        } else {
            campo.classList.remove('error');
        }
    });

    if (!valido) {
        alert('Por favor completa todos los campos.');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('error');
        alert('Ingresa un correo electrónico válido.');
        return;
    }

    if (password.value.length < 6) {
        password.classList.add('error');
        alert('La contraseña debe tener al menos 6 caracteres.');
        return;
    }

    alert('Registro exitoso 🚀');
    document.getElementById('formulario').reset();
});

/* ==========================
   QUITAR ERROR
========================== */
document
.querySelectorAll('input')
.forEach(input => {
    input.addEventListener('input', () => {
        input.classList.remove('error');
    });
});
