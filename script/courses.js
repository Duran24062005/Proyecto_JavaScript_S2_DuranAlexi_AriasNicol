// script/courses.js
document.addEventListener("DOMContentLoaded", async () => {
    const coursesContainer = document.getElementById("courses-container");

    async function fetchUsers() {
        const resp = await fetch('https://68a7a3b6bb882f2aa6dc2c35.mockapi.io/users/');
        let data = await resp.json();
        return await data;
    }

    let allUsers = await fetchUsers();
    


    // Filtrar solo los docentes
    const teachers = allUsers.filter(user => user.userType === "Docente");

    teachers.forEach(teacher => {
        teacher.courses.forEach(course => {
            const col = document.createElement("div");
            col.className = "col-md-5 col-sm-12 card shadow-sm p-0";

            col.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${course.image}" class="img-fluid rounded-start h-100 object-fit-cover" alt="${course.title}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${course.title}</h5>
                            <p class="card-text">${course.description}</p>
                            <p class="card-text">
                                <small class="text-body-secondary">
                                    ${teacher.name} · ${course.lessonsCompleted}/${course.lessons} lecciones completadas
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            `;

            coursesContainer.appendChild(col);
        });
    });
});
