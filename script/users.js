document.addEventListener("DOMContentLoaded", function() {
    const btnFilterTeachers = document.getElementById("filter-tch");
    const btnFilterStudents = document.getElementById("filter-stn");
    const btnFilterAdmins = document.getElementById('filter-adm');
    /*function fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                const tbody = document.querySelector('tbody');
                tbody.innerHTML = ''; // Clear existing rows

                data.forEach((user, index) => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <th scope="row">${index + 1}</th>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>Admin</td>
                        <td>${user.phone}</td>
                        <td>${user.address.city}, ${user.address.street}</td>
                        <td>
                            <button class="btn btn-sm btn-warning">Edit</button>
                            <button class="btn btn-sm btn-danger">Delete</button>
                        </td>
                    `;
                    tbody.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching users:', error));
    }
    fetchUsers();*/

    async function fetchUsers() {
        // ttps://jsonplaceholder.typicode.com/users
        try {
            const res = await fetch('https://68a7a3b6bb882f2aa6dc2c35.mockapi.io/users');
            const data = await res.json();
            return data;
        } catch (error) {
            console.log(error);
            
        }
    }

    function renderUsers(users) {
        const tbody = document.getElementById('table-body');
        tbody.innerHTML = ''; // Clear existing rows
        users.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <th scope="row">${index + 1}</th>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.userType}</td>
                <td>${user.phone}</td>
                <td>${user.location.city}, ${user.location.country}</td>
                <td>
                    <button class="btn btn-sm btn-warning">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    fetchUsers().then(users => renderUsers(users));

    function filterStudents() {
        fetchUsers().then(users => {
            let students = users.filter(u => u.userType.toLowerCase() == 'student' || u.userType.toLowerCase() == 'estudiante');
            renderUsers(students);
        });
    }

    function filterTeachers() {
        fetchUsers().then(users => {
            let teachers = users.filter(u => u.userType.toLowerCase() == 'teacher' || u.userType.toLowerCase() == 'docente');
            renderUsers(teachers);
        });
    }

    function filterAdmins() {
        fetchUsers().then(users => {
            let teachers = users.filter(u => u.userType.toLowerCase() == 'admin' || u.userType.toLowerCase() == 'administrador');
            renderUsers(teachers);
        });
    }

    btnFilterStudents.addEventListener('click', () => {
        filterStudents();
    })

    btnFilterTeachers.addEventListener('click', () => {
        filterTeachers();
    })

    btnFilterAdmins.addEventListener('click', () => {
        filterAdmins();
    })

});