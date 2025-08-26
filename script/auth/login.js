// script/login.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const nameInput = document.getElementById("inputName");
    const inputPassword = document.getElementById("inputPassword");
    const errorMessage = document.getElementById("errorMessage");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita que recargue la página

        const name = nameInput.value.trim();
        const password = inputPassword.value;

        // Validación simple
        if (!name || !password) {
            errorMessage.textContent = "Por favor, complete todos los campos.";
            return;
        }

        async function fetchUsers() {
            const res = await fetch('https://68a7a3b6bb882f2aa6dc2c35.mockapi.io/users/');
            let data = await res.json();
            return data;
        }
        console.log(name, password);

        fetchUsers().then(users => {
            console.log(users);
            users.forEach(e => {
                if (e.name.toLowerCase() === name.toLowerCase() && e.password.toLowerCase() === password.toLowerCase()) {
                    // Guardar en localStorage
                    localStorage.setItem("userData", JSON.stringify({
                        name: e.name,
                        userType: e.userType,
                        id: e.id,
                        img: e.img
                    }));
                    // Ejemplo de redirección después de login
                    window.location.href = "./pages/dashboard.html";
                }
                if (e.name.toLowerCase() !== name.toLowerCase() && e.password.toLowerCase() !== password.toLowerCase()) {
                    errorMessage.innerHTML = '<p style="color: red" class="text-center"  class="error-message" role="alert" aria-live="assertive">Usuario o contraseña incorrectos.</p>';
                }
            });
        })
        

        // Limpia el input despues de recibir el dato
        nameInput.value = "";

        // Limpia mensaje de error y opcionalmente redirige
        errorMessage.textContent = "";
        // alert("Datos guardados correctamente en localStorage");

        // Ejemplo de redirección después de login
        //window.location.href = "./pages/dashboard.html";
    });
});
