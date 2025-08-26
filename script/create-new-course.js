document.addEventListener('DOMContentLoaded', () => {
    const createUserForm = document.querySelector('form');

    async function fetchUser() {
        try {
            const resp = await fetch('https://68a7a3b6bb882f2aa6dc2c35.mockapi.io/users/');
            let data = await resp.json();
            return data;
        } catch (error) {
            console.log(error);
            
        }
    }

    const create = async (id, data) => {
        const res = await fetch(`https://68a7a3b6bb882f2aa6dc2c35.mockapi.io/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                courses: data
            })
        });
        return await res.json();
    }
    
    createUserForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        let userId = document.getElementById('inputId').value;
        let users = await fetchUser();
        let user = users.find(u => parseInt(u.id )=== parseInt(userId));
        console.log(typeof user.courses);
        

        
        const newCourseData = {
            title: document.getElementById('inputTitle').value,
            description: document.getElementById('inputDescription').value,
            lessons: document.getElementById('inputLessons').value,
            lessonsCompleted: 0,
            image: document.getElementById('inputImgUrl').value,
            status: 'activo'
        }

        user.courses.push(newCourseData);
        // console.log(user.courses);
        
        
        if (await create(userId, user.courses)) {
            window.location.href = "./courses.html";
        }
        
    })
});