const gitHub = new GitHub;
const ui = new UI;

gitHub.GetUserData()
.then(data => {
    ui.ShowProfile(data.profile);
    ui.ShowRepos(data.repos);
});