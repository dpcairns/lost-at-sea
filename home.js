import { saveUser } from './app.js';

const userSignUp = document.getElementById('userCreate');

userSignUp.addEventListener('click', () => {
    const nameField = document.getElementById('username');
    const avatarField = document.querySelector('input[name="avatar"]:checked').value;

    saveUser({ username: nameField.value, avatar: avatarField });
    window.location = 'map'; 
});




// const userSignUp = document.getElementById('user-sign-up');

// userSignUp.addEventListener('enter', function (event) {

//     event.preventDefault();


//     const formData = new FormData(userSignUp);
   
//     const user = makeUser(formData);


//     saveUser(user);


//     window.location = 'map';
// });