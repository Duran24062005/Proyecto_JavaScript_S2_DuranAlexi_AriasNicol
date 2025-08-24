// script/courses.js
document.addEventListener("DOMContentLoaded", async () => {
    const coursesContainer = document.getElementById("courses-container");

    // 1. Obtener datos desde la API
    async function fetchUsers() {
        const resp = await fetch('https://68a7a3b6bb882f2aa6dc2c35.mockapi.io/users/');
        let data = await resp.json();
        return data;
    }

    let allUsers = await fetchUsers();

    // 2. Filtrar solo docentes que tengan cursos
    const teachers = allUsers.filter(user => user.userType === "Docente" && user.courses);

    // 3. Agrupar cursos (puedes cambiar la categoría a algo fijo, ej: "Web Development")
    const grouped = {};
    teachers.forEach(teacher => {
        teacher.courses.forEach(course => {
            const category = teacher.location?.city || "General"; // ejemplo usando ciudad
            if (!grouped[category]) grouped[category] = [];
            grouped[category].push({...course, teacher: teacher.name});
        });
    });

    // 4. Renderizar secciones por categoría
    for (const [category, courses] of Object.entries(grouped)) {
        const section = document.createElement("div");
        section.className = "mb-5";

        section.innerHTML = `
            <h3 class="mb-4">📚 ${category}</h3>
            <div class="row g-4">
                ${courses.map(course => `
                    <div class="col-md-4 col-sm-12">
                        <div class="card h-100 shadow-sm">
                            <img src="${course.image}" class="card-img-top" alt="${course.title}">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${course.title}</h5>
                                <p class="card-text">${course.description}</p>
                                <p class="text-muted small">👨‍🏫 ${course.teacher}</p>
                                <div class="progress mb-2">
                                    <div class="progress-bar" role="progressbar" 
                                         style="width: ${(course.lessonsCompleted / course.lessons) * 100}%;">
                                        ${course.lessonsCompleted}/${course.lessons}
                                    </div>
                                </div>
                                <button class="btn btn-outline-primary mt-auto">Continue Learning</button>
                            </div>
                        </div>
                    </div>
                `).join("")}
            </div>
        `;
        coursesContainer.appendChild(section);
    }
});

