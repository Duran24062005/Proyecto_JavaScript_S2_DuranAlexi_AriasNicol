// script/login.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const emailInput = document.getElementById("inputEmail");
    const inputPassword = document.getElementById("inputPassword");
    const errorMessage = document.getElementById("errorMessage");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita que recargue la página

        const email = emailInput.value.trim();
        const password = inputPassword.value;

        // Validación simple
        if (!email || !password) {
            errorMessage.textContent = "Por favor, complete todos los campos.";
            return;
        }

        async function fetchUsers() {
            const res = await fetch('https://68a7a3b6bb882f2aa6dc2c35.mockapi.io/users/');
            let data = await res.json();
            return data;
        }
        console.log(email, password);

        fetchUsers().then(users => {
            const user = users.find(e => 
                e.email.toLowerCase() === email.toLowerCase() &&
                e.password.toLowerCase() === password.toLowerCase()
            );

            if (user) {
                // Guardar en localStorage
                localStorage.setItem("userData", JSON.stringify({
                    name: user.name,
                    userType: user.userType,
                    id: user.id,
                    img: user.img
                }));

                // Redirección según el rol
                if (user.userType.toLowerCase() === 'administrador' || user.userType.toLowerCase() === 'admin') {
                    window.location.href = "./pages/dashboard.html";
                } else if (user.userType.toLowerCase() === 'docente' || user.userType.toLowerCase() === 'teacher') {
                    window.location.href = "./teacher-pages/dashboard.html";
                } else if (user.userType.toLowerCase() === 'estudiante' || user.userType.toLowerCase() === 'student') {
                    window.location.href = "./student-module/dashboard.html";
                }

            } else {
                errorMessage.innerHTML = '<p style="color: red" class="text-center error-message" role="alert" aria-live="assertive">Usuario o contraseña incorrectos.</p>';
            }
        });

        

        // Limpia el input despues de recibir el dato
        nameInput.value = "";

        // Limpia mensaje de error y opcionalmente redirige
        errorMessage.textContent = "";
        // alert("Datos guardados correctamente en localStorage");

        // Ejemplo de redirección después de login
        //window.location.href = "./pages/dashboard.html";
    });
});
