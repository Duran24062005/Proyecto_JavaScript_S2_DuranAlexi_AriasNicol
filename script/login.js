// script/login.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const nameInput = document.getElementById("inputName");
    const userTypeSelect = document.getElementById("userType");
    const errorMessage = document.getElementById("errorMessage");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita que recargue la página

        const name = nameInput.value.trim();
        const userType = userTypeSelect.value;

        // Validación simple
        if (!name || !userType) {
            errorMessage.textContent = "Por favor, complete todos los campos.";
            return;
        }

        console.log(name, userType);
        
        // Guardar en localStorage
        localStorage.setItem("userData", JSON.stringify({
            name: name,
            userType: userType
        }));

        // Limpia el input despues de recibir el dato
        nameInput.value = "";

        // Limpia mensaje de error y opcionalmente redirige
        errorMessage.textContent = "";
        alert("Datos guardados correctamente en localStorage");

        // Ejemplo de redirección después de login
        window.location.href = "../pages/dashboard.html";
    });
});
