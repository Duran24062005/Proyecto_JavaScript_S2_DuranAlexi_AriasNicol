// script/dashboard.js

document.addEventListener("DOMContentLoaded", () => {
    const storedData = localStorage.getItem("userData");
    const userData = JSON.parse(storedData);
    const userName = document.getElementById('userName');
    const coursesElement = document.getElementById("courses-n");
    const activeCoursesElement = document.getElementById("active-courses-n");
    const teachersElement = document.getElementById("teachers-n");
    const activesTeachersElement = document.getElementById("actives-teachers-n");
    const studentsElement = document.getElementById("students-n");
    const activesStudentsElement = document.getElementById("actives-students-n");

    userName.textContent = userData.name;
    userName.style.color = 'rgba(24, 186, 214, 0.72)';
    if (userData.name.toLowerCase() == 'alexi') {
        userName.style.borderBottom = '2px solid';
    }

    async function fetchUsers() {
        const res = await fetch('https://68a7a3b6bb882f2aa6dc2c35.mockapi.io/users/');
        let data = await res.json();
        return data;
    }

    fetchUsers().then(users => {
        console.log(users);
        let teachersCount = 0;
        let studentsCount = 0;
        let courses = 0;  
        users.forEach(e => {
            e.courses = Math.floor(Math.random() * 10) + 1; // Asigna un número aleatorio de cursos entre 1 y 10
        });
        /*console.log("Teachers:", teachersCount);
        console.log("Students:", studentsCount);
        console.log("Active Teachers:", courses);*/
        
    });

    if (!userData.name && !userData.userType) {
        // Si no hay datos, podría redirigir al login
        alert("No hay datos de usuario, redirigiendo al login...");
        window.location.href = "/index.html";
        return;
    }


    // Muestra en consola
    console.log("Nombre:", userData.name);
    console.log("Tipo de usuario:", userData.userType);

});
`<div class="row">
                    <div class="col mb-3">
                        <div class="card">
                            <div class="card-body container">
                                <div class="row">
                                    <div class="col">
                                        <p class="card-text card-number" id="courses-n">30</p>
                                        <p class="card-text">Courses</p>
                                    </div>
                                    <div class="col">
                                        <p class="card-text card-number" id="active-courses-n">40</p>
                                        <p class="card-text">Actives</p>
                                    </div>
                                </div>
                                
                                <a href="./courses.html" class="btn btn-primary mt-4">Courses</a>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-3">
                        <div class="card">
                            <div class="card-body container">
                                <div class="row">
                                    <div class="col">
                                        <p class="card-text card-number" id="teachers-n">30</p>
                                        <p class="card-text">Teachers</p>
                                    </div>
                                    <div class="col">
                                        <p class="card-text card-number" id="actives-teachers-n">10</p>
                                        <p class="card-text">Actives</p>
                                    </div>
                                </div>
                                
                                <a href="./users.html" class="btn btn-primary mt-4">Teachers</a>
                            </div>
                        </div>
                    </div>
                    <div class="col mb-3">
                        <div class="card">
                            <div class="card-body container">
                                <div class="row">
                                    <div class="col">
                                        <p class="card-text card-number" id="students-n">30</p>
                                        <p class="card-text">Teachers</p>
                                    </div>
                                    <div class="col">
                                        <p class="card-text card-number" id="actives-students-n">28</p>
                                        <p class="card-text">Actives</p>
                                    </div>
                                </div>
                                
                                <a href="./users.html" class="btn btn-primary mt-4">Students</a>
                            </div>
                        </div>
                    </div>
                </div>`;