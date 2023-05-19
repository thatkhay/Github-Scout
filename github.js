class GitHub{
    constructor() {
        this.client_id = 'e9edd72e0d42846c84e3';
        this.client_secret = '73e8c7107ad9c52fe96636a0a555680c8024dbb3'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret
    
    
    
    
    
    }`);

        const profile = await profileResponse.json();

        return {

            profile
        }
    }
}