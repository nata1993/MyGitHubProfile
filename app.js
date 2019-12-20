const gitHub = new GitHub;
const ui = new UI;

gitHub.GetUserData()
.then(data => {
    console.log(data.profile);
    ui.ShowProfile(data.profile);
});