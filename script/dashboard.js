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
    let inactivesCourses = 0;
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
                if (c.status !== undefined) {
                    console.log(c.status);
                    inactivesCourses += c.status.toLowerCase() == 'activo' ? 0 : 1;
                }
        })


            //inactiveTeacher += us.userType.toLowerCase() == 'teacher' || e.userType.toLowerCase() == 'docente' && us.status.toLowerCase() == 'activo' ? 0 : 1;
            //inactiveStudents += us.userType.toLowerCase() == 'student' || e.userType.toLowerCase() == 'estudiante' && us.status.toLowerCase() == 'activo' ? 0 : 1;
            
        }
    });
    

    activeCoursesElement.textContent = inactivesCourses;
    activesTeachersElement.textContent = 'l';
    activesStudentsElement.textContent = 'l';

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