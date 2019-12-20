const gitHub = new GitHub;

gitHub.GetUserData()
.then(data => {
    console.log(data.profile)
});