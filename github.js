class GitHub
{
    constructor()
    {
        this.client_ID = 'bba931d5d676e18aa68b';
        this.client_secret = "f03d7bce0afe22d082fa66cf132fb729f6e43a1b";
        this.repos_count = 10;
        this.repos_sort = 'created: asc';
        this.user = 'nata1993';
        this.apiUrl = 'https://api.github.com/users/';
    }

    async GetUserData()
    {
        let urlProfile = `${this.apiUrl}${this.user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`;
        let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`;

        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}