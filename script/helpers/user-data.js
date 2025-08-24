export default class UserData {
    constructor(endpoint) {
        this.endpoint = endpoint;
        this.url = 'https://68a7a3b6bb882f2aa6dc2c35.mockapi.io/';
    }

    async fetchUsers() {
        const res = await fetch(this.url + this.endpoint);
        let data = await res.json();
        return data;
    }

    async getUserByName(id=null) {
        const users = await this.fetchUsers();
        return users.find(user => user.id === id);
    }

    async createUser(userData=null) {
        const res = await fetch(this.url + this.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        return await res.json();
    }

    async updateUser(id=null, updatedData=null) {
        const res = await fetch(this.url + this.endpoint + '/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        return await res.json();
    }
    
    async deleteUser(id) {
        const res = await fetch(this.url + this.endpoint + '/' + id, {
            method: 'DELETE'
        });
        return await res.json();
    }
}