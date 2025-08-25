document.addEventListener('DOMContentLoaded', async() => {
    const userData = localStorage.getItem("userData");
    const data = JSON.parse(userData);
    const userName = document.getElementById('user-name');
    const userType = document.getElementById('user-description');
    const infoContainer = document.getElementById('info-container');

    // console.log(userName.textContent, userType.textContent);

    async function fetchUsers() {
        const resp = await fetch('https://68a7a3b6bb882f2aa6dc2c35.mockapi.io/users/');
        let data = resp.json();
        return data
    };

    let users = await fetchUsers();
    // console.log(users);
    let user = users.find(u => u.id === data.id);
    // console.log(typeof users);
    userName.textContent = user.name;
    userType.textContent = user.userType;
    infoContainer.innerHTML = `<h3>Personal Information</h3>
                    <div class="col">
                        <div class="container">
                            <p>Full name</p>
                            <p>${user.name}</p>
                        </div>
                        <div class="container">
                            <p>Email</p>
                            <p>${user.email}</p>
                        </div>
                        <div class="container">
                            <p>Phone</p>
                            <p>${user.phone}</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="container">
                            <p>ID</p>
                            <p>${user.id}</p>
                        </div>
                        <div class="container">
                            <p>Status</p>
                            <p>${user.status}</p>
                        </div>
                        <div class="container">
                            <p>Location</p>
                            <div class="container">
                                <div class="row">
                                    <p class="col">${user.location.city}</p>
                                    <p class="col">${user.location.country}</p>
                                </div>
                            </div>
                        </div>
                    </div>`;

});