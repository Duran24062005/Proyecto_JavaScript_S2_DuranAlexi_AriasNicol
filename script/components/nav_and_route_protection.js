const userData = localStorage.getItem("userData");
const data = JSON.parse(userData);

if (!data.name && !data.userType) {
        // Si no hay datos, podría redirigir al login
        alert("No hay datos de usuario, redirigiendo al login...");
        window.location.href = "../index.html";
    }

const  nav = document.getElementById('nav');
nav.innerHTML = `<nav class="nav-container">
        <img src="../storage/img/smartlearnlogobackgroundless.png" alt="" class="img-nav-logo">
        <div class="left-container">
            <label for="menu_hamburguer" class="menu_hamburguer">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </label>
            <input class="menu-hamburguer" type="checkbox" name="" id="menu_hamburguer">
            <ul class="list-nav-container">
                <li class="list-nav-items"><a href="./dashboard.html">Dashboard</a></li>
                <li class="list-nav-items"><a href="./courses.html">Courses</a></li>
                ${data.userType == 'Administrador' ? '': `<li class="list-nav-items"><a href="./assignment.html">Asignment</a></li>`}
                <li class="list-nav-items"><a href="./progress.html">Progress</a></li>
            </ul>
            <div class="profile-container">
                <img src="${data.img ? data.img : data.img}" alt="Foto de ${data.name}" class="profile-img">
                <p class="name">${data.userType.toLowerCase() == 'administrador' ? `Admin: ` + data.name : data.name }</p>
                <label for="profile_btn" class="profile_btn"><img src="../storage/img/ArrowDown.png" alt="" class="img-profile-btn"></label>
                <input type="checkbox" name="" id="profile_btn" class="profile-btn">
                <div class="user-settings">
                    <p class="self"><a href="./profile.html">profile</a></p>
                    <p class="self bt"><a href="./settings.html">Settings</a></p>
                    <div class="line"></div>
                    <p id="Logout" class="self">Logout</p>
                </div>
            </div>
        </div>
    </nav>`;



nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'P') {
        if (e.target.id === 'Logout') {
            localStorage.setItem("userData", JSON.stringify({
                name: "",
                userType: ""
            }));
            window.location.href = "../index.html";
        };
    };
});