// init Github
const github = new GitHub;

//init ui
const ui = new UI;


// search input
const searchUser = document.querySelector('#searchUser');


// search eventlistener
searchUser.addEventListener('keyup', (e) => {
// get input text 
const userText = e.target.value;
if (userText !== '') {
    github.getUser(userText)
    .then(data => {
        if (data.profile.message === 'Not Found') {
            //show alert
            
        }else{
        //show profile
        ui.showProfile(data.profile);
        }
    })
}else{
    // clear profile
}
});