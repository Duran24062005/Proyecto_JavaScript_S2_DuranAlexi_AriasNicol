// script/dashboard.js

document.addEventListener("DOMContentLoaded", () => {
    const storedData = localStorage.getItem("userData");
    const userData = JSON.parse(storedData);

    if (!userData.name && !userData.userType) {
        // Si no hay datos, podría redirigir al login
        alert("No hay datos de usuario, redirigiendo al login...");
        window.location.href = "/index.html";
        return;
    }


    // Muestra en consola
    console.log("Nombre:", userData.name);
    console.log("Tipo de usuario:", userData.userType);

    // Ejemplo: mostrar en el DOM
    document.getElementById("welcomeMessage").textContent =
        `Bienvenido ${userData.name} (${userData.userType})`;

});
