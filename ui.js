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
                    <h3 class="font-weight-bold text-info">${user.login}</h3>
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a class="btn btn-primary btn-block" target="_blank" href="${user.html_url}">Go to Profile</a>
                </div>

                <div class="col-md-9">
                    <span class="badge badge-primary"><b>Public Repos: </b>${user.public_repos}</span>
                    <span class="badge badge-success"><b>Followers: </b>${user.followers}</span>
                    <span class="badge badge-warning"><b>Following: </b>${user.following}</span>

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
        let reposArrayElement = '';

        repos.forEach(repo => {
            reposArrayElement += `
                <div class="card card-body mb-3">
                    <div class="row">
                        <div class="col-md-3">
                            <a href="${repo.html_url}" target="_blank"> ${repo.name}</a>
                        </div>

                        <div class="col-md-7">
                            <span>${repo.description}</span>
                        </div>

                        <div class="col-md-2">
                            <span class="badge badge-primary"> Followers: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `;

            document.getElementById('repos').innerHTML = reposArrayElement;
        });
    }
}