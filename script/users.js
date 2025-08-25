document.addEventListener("DOMContentLoaded", function () {
    const allUsers = document.getElementById('all-stn');
    const btnFilterTeachers = document.getElementById("filter-tch");
    const btnFilterStudents = document.getElementById("filter-stn");
    const btnFilterAdmins = document.getElementById('filter-adm');
    const tbody = document.getElementById('table-body');

    let currentUserId = null;

    async function fetchUsers() {
        try {
            const res = await fetch('https://68a7a3b6bb882f2aa6dc2c35.mockapi.io/users');
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }

    function renderUsers(users) {
        tbody.innerHTML = '';
        users.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <th scope="row">${index + 1}</th>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.userType}</td>
                <td>${user.phone}</td>
                <td>${user.location.city}, ${user.location.country}</td>
                <td>${user.status}</td>
                <td>
                    <button class="edit btn btn-sm btn-warning" data-id="${user.id}">Edit</button>
                    <button class="delete btn btn-sm btn-danger" data-id="${user.id}">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    // Cargar todos al inicio
    fetchUsers().then(users => renderUsers(users));

    // --- FILTROS ---
    function filterStudents() {
        fetchUsers().then(users => {
            let students = users.filter(u => u.userType.toLowerCase() === 'student' || u.userType.toLowerCase() === 'estudiante');
            renderUsers(students);
        });
    }

    function filterTeachers() {
        fetchUsers().then(users => {
            let teachers = users.filter(u => u.userType.toLowerCase() === 'teacher' || u.userType.toLowerCase() === 'docente');
            renderUsers(teachers);
        });
    }

    function filterAdmins() {
        fetchUsers().then(users => {
            let admins = users.filter(u => u.userType.toLowerCase() === 'admin' || u.userType.toLowerCase() === 'administrador');
            renderUsers(admins);
        });
    }

    allUsers.addEventListener('click', async () => {
        let users = await fetchUsers();
        renderUsers(users);
    });

    btnFilterStudents.addEventListener('click', () => filterStudents());
    btnFilterTeachers.addEventListener('click', () => filterTeachers());
    btnFilterAdmins.addEventListener('click', () => filterAdmins());

    // --- EVENTOS EDITAR / ELIMINAR ---
    tbody.addEventListener('click', async (e) => {
        if (e.target.classList.contains('edit')) {
            const id = e.target.dataset.id;
            currentUserId = id;

            const users = await fetchUsers();
            const user = users.find(u => u.id == id);

            // Rellenar el formulario
            document.getElementById('editUserId').value = user.id;
            document.getElementById('editName').value = user.name;
            document.getElementById('editEmail').value = user.email;
            document.getElementById('editRole').value = user.userType;
            document.getElementById('editPhone').value = user.phone;
            document.getElementById('editLocation').value = `${user.location.city}, ${user.location.country}`;

            const editModal = new bootstrap.Modal(document.getElementById('editModal'));
            editModal.show();
        }

        if (e.target.classList.contains('delete')) {
            currentUserId = e.target.dataset.id;
            const deleteModal = new bootstrap.Modal(document.getElementById('deleteModal'));
            deleteModal.show();
        }
    });

    // Guardar cambios en editar
    document.getElementById('editUserForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        const id = document.getElementById('editUserId').value;
        const updatedUser = {
            name: document.getElementById('editName').value,
            email: document.getElementById('editEmail').value,
            userType: document.getElementById('editRole').value,
            phone: document.getElementById('editPhone').value,
            location: {
                city: document.getElementById('editLocation').value.split(',')[0].trim(),
                country: document.getElementById('editLocation').value.split(',')[1].trim()
            },
            status: document.getElementById("editStatus").value
        };

        await fetch(`https://68a7a3b6bb882f2aa6dc2c35.mockapi.io/users/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedUser)
        });

        bootstrap.Modal.getInstance(document.getElementById('editModal')).hide();
        const users = await fetchUsers();
        renderUsers(users);
    });

    // Confirmar eliminación
    document.getElementById('confirmDelete').addEventListener('click', async () => {
        await fetch(`https://68a7a3b6bb882f2aa6dc2c35.mockapi.io/users/${currentUserId}`, {
            method: 'DELETE'
        });

        bootstrap.Modal.getInstance(document.getElementById('deleteModal')).hide();
        const users = await fetchUsers();
        renderUsers(users);
    });
});
