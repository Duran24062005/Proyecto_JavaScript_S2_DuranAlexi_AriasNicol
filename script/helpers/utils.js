export function userData() {
    /* This function return  */
    const userData = localStorage.getItem("userData");
    const data = JSON.parse(userData);
    return data
}

export function redirectToLogin() {
    const storedData = localStorage.getItem("userData");
    
    if (!userData.name && !userData.userType) {
        // Si no hay datos, podría redirigir al login
        alert("No hay datos de usuario, redirigiendo al login...");
        window.location.href = "/index.html";
        return;
    }
}