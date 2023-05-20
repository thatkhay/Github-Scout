class GitHub{
    constructor(){
        this.client_id = 'a8366d0cb92342d96594';
        this.client_secret = '238d33766156b2f08b38e286c78b500c381ec040';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client.secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        return{

            profile
        }
    }
}