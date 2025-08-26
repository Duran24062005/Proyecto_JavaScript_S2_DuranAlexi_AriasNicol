// script/dashboard.js

document.addEventListener("DOMContentLoaded", async () => {
    const storedData = localStorage.getItem("userData");
    const userData = JSON.parse(storedData);
    const userName = document.getElementById('userName');
    const coursesElement = document.getElementById("courses-n");
    const activeCoursesElement = document.getElementById("active-courses-n");
    const teachersElement = document.getElementById("teachers-n");
    const activesTeachersElement = document.getElementById("actives-teachers-n");
    const studentsElement = document.getElementById("students-n");
    const activesStudentsElement = document.getElementById("actives-students-n");
    const coursesContainer = document.getElementById("courses-container");
    let activeCourses = 0;
    let inactiveStudents = 0;
    let inactiveTeacher = 0;

    userName.textContent = userData.name;
    userName.style.color = 'rgba(24, 186, 214, 0.72)';
    if (userData.name.toLowerCase() == 'alexi duran') {
        userName.style.borderBottom = '2px solid';
    }

    async function fetchUsers() {
        const res = await fetch('https://68a7a3b6bb882f2aa6dc2c35.mockapi.io/users/');
        let data = await res.json();
        return data;
    }

    fetchUsers().then(users => {
        // console.log(users);
        let teachersCount = 0;
        let studentsCount = 0;
        let courses = 0;

        users.forEach(e => {
            courses += e.courses === undefined ? 0 : e.courses.length;
            teachersCount += e.userType.toLowerCase() == 'teacher' || e.userType.toLowerCase() == 'docente' ? 1 : 0;
            studentsCount += e.userType.toLowerCase() == 'student' || e.userType.toLowerCase() == 'estudiante' ? 1 : 0;
            // console.log(e.courses);
            
        });
        // console.log("Teachers:", teachersCount);
        coursesElement.textContent = courses;
        // console.log("Students:", studentsCount);
        teachersElement.textContent = teachersCount;
        // console.log("Active Courses:", courses);
        studentsElement.textContent = studentsCount;
        
    });

    let usersByPrueb = await fetchUsers();
    usersByPrueb.forEach(us => {
        if (us.courses != undefined) {
            us.courses.forEach(c => {
                if (c.status && c.status.toLowerCase() === "activo") {
                    activeCourses++;
                }
            });
        }

        if ((us.userType.toLowerCase() === "teacher" || us.userType.toLowerCase() === "docente")) {
            inactiveTeacher += us.status === "activo" ? 1 : 0;
        }
        if ((us.userType.toLowerCase() === "student" || us.userType.toLowerCase() === "estudiante")) {
            inactiveStudents += us.status === "activo" ? 1 : 0;
        }
        
    });
    

    activeCoursesElement.textContent = activeCourses;
    activesTeachersElement.textContent = inactiveTeacher;
    activesStudentsElement.textContent = inactiveStudents;

    if (!userData.name && !userData.userType) {
        // Si no hay datos, podría redirigir al login
        alert("No hay datos de usuario, redirigiendo al login...");
        window.location.href = "/index.html";
        return;
    }

    // Todos los usuarios
    let users = await fetchUsers();
    // console.log(users);

    // 2. Filtrar solo docentes que tengan cursos
    const teachers = users.filter(user => user.userType === "Docente" && user.courses);
    // console.log(teachers[0].courses);
    teachers[1].courses.forEach(e => {
        // console.log(e);
        coursesContainer.innerHTML += `<div class="col-md-3 col-sm-12">
                        <div class="card h-100 shadow-sm">
                            <img src="${e.image}" class="card-img-top" alt="${e.title}">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${e.title}</h5>
                                <p class="card-text">${e.description}</p>
                                <p class="text-muted small">👨‍🏫 ${teachers[0].name}</p>
                                <div class="progress mb-2">
                                    <div class="progress-bar" role="progressbar" 
                                         style="width: ${(e.lessonsCompleted / e.lessons) * 100}%;">
                                        ${e.lessonsCompleted}/${e.lessons}
                                    </div>
                                </div>
                                <!--<button class="btn btn-outline-primary mt-auto">Continue Learning</button>-->
                            </div>
                        </div>
                    </div>`;
    })
    
    

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