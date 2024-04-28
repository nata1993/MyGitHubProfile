class UI
{
    constructor()
    {
        this.profile = document.getElementById('profile');
    }

    ShowProfile(user)
    {
        let bioHTML = "";
        bioHTML += `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <h3 class="card-title">${user.login}</h3>
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a class="btn btn-primary d-grid" target="_blank" href="${user.html_url}">Go to Profile</a>
                </div>

                <div class="col-md-9">
                    <span class="badge text-bg-primary"><b>Public Repos: </b><span class="badge text-bg-light">${user.public_repos}</span></span>
                    <span class="badge text-bg-success"><b>Followers: </b><span class="badge text-bg-light">${user.followers}</span></span>
                    <span class="badge text-bg-warning"><b>Following: </b><span class="badge text-bg-light">${user.following}</span></span>

                    <ul class="list-group">
                        <li class="list-group-item"><b>Website/Blog: </b>${user.blog}</li>
                        <li class="list-group-item"><b>Location: </b>${user.location}</li>
                        <li class="list-group-item"><b>Member since: </b>${user.created_at}</li>
                        <li class="list-group-item"><b>Bio: </b>${user.bio}</li>
        `;

        if(user.hireable)
            bioHTML += `<li class="list-group-item"><b>Hireable: </b>Yes</li>`;
        else
            bioHTML += `<li class="list-group-item"><b>Hireable: </b>No</li>`;
        bioHTML += `
                    </ul>
                </div>                          
            </div>
        </div>

        <h3 class="page-heading mb-3">Latest repos</h3>
        <div id="repos"></div>
        `;
        this.profile.innerHTML = bioHTML;
    }

    ShowRepos(repos)
    {
        let reposArrayElement = `
        <div class="card card-body mb-3">
            <div class="row">
                <ul class="list-group list-group-flush">
            `;
        repos.forEach(repo => {
            reposArrayElement += `
            <li class="list-group-item">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <a href="${repo.html_url}" target="_blank"> ${repo.name}</a>
                        </div>
            
                        <div class="col-md-7">
                            <span>${repo.description}</span>
                        </div>
            
                        <div class="col-md-2">
                            <span class="badge text-bg-secondary">Followers: <span class="badge text-bg-light">${repo.forks_count}</span></span>
                        </div>
                    </div>
            </li>`;
        });
        reposArrayElement += `
            </ul>
        </div>`;
        document.getElementById('repos').innerHTML = reposArrayElement;
    }
}