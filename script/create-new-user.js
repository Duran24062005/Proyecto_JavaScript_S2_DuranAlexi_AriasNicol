document.addEventListener('DOMContentLoaded', () => {
    const createUserForm = document.querySelector('form');
    
    async function fetchUsers() {
        try {
            const res = await fetch('https://68a7a3b6bb882f2aa6dc2c35.mockapi.io/users');
            const data = await res.json();
            return data;
        } catch (error) {
            console.log(error);
            
        }
    }

    const create = async (data) => {
        const res = await fetch('https://68a7a3b6bb882f2aa6dc2c35.mockapi.io/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await res.json();
    }
    
    createUserForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        let us = await fetchUsers();
        let id = us.length + 1;
        
        const newUserData = {
            id: id,
            name: document.getElementById('inputName').value,
            email: document.getElementById('inputEmail').value,
            phone: document.getElementById('inputPhone').value,
            password: document.getElementById('inputPassword').value,
            location: {
                city: document.getElementById('inputCity').value,
                country: document.getElementById('inputCountry').value
            },
            userType: document.getElementById('inputRole').value,
            status: 'activo'
        }
        
        if (await create(newUserData)) {
            window.location.href = "/pages/users.html";
        }
        
    })
});