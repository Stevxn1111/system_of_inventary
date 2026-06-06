document
.getElementById("formularioLogin")
.addEventListener("submit", function(e){

    e.preventDefault();

    const user = document.getElementById("usuario");
    const pass = document.getElementById("password");

    if(user.value.length < 3){

        user.classList.add("error");
        return;

    }

    if(pass.value.length < 4){

        pass.classList.add("error");
        return;

    }

    alert("Login exitoso 🚀");

});

/* ==========================
QUITAR ERROR
========================== */

document
.querySelectorAll("input")
.forEach(input=>{

    input.addEventListener("input",()=>{

        input.classList.remove("error");

    });

});