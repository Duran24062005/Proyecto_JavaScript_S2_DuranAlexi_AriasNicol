export function redirectToLogin() {
    const storedData = localStorage.getItem("userData");
    
    if (!userData.name && !userData.userType) {
        // Si no hay datos, podría redirigir al login
        alert("No hay datos de usuario, redirigiendo al login...");
        window.location.href = "/index.html";
        return;
    }
}