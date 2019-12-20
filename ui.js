class UI
{
    constructor()
    {
        this.profile = document.getElementById('profile');
    }

    ShowProfile(user)
    {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <h3 class="font-weight-bold text-info">${user.login}</h3>
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a class="btn btn-primary btn-block" target="_blank" href="${user.html_url}"> Go to Profile </a>
                </div>

                <div class="col-md-9">
                    <span class="badge badge-primary"> Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-success"> Followers: ${user.followers}</span>
                    <span class="badge badge-warning"> Following: ${user.following}</span>
                </div>                          
            </div>
        </div>
        `;
    }
}