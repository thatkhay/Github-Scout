//init gitub
const github = new GitHub;
//init ui
const ui = new UI;
// seach input
const searchUser = document.getElementById('searchUser');

// search input event listener
searchUser.addEventListener('keyup', (e) => {
    // get text input
    const userText = e.target.value;

    if (userText !== '') {
        //make http call
        github.getUser(userText)
        .then(data => {
    
            if (data.profile.message === 'Not Found') {
                //show alert
             ui.showAlert('User not Found' , 'alert alert-danger')
                
            }else{
                // show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }else{
      //clear profile  
      ui.clearProfile();

    }
})