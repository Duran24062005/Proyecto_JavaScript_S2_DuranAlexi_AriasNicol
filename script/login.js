document.addEventListener('DOMContentLoaded', () => {
    const name = document.getElementById('inputName');
    const userType = document.getElementById('userType');

    function userGlobal() {
        console.log(name.value, userType.value);   
    }
    
})