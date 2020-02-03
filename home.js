const userSignUp = document.getElementById('user-sign-up');

userSignUp.addEventListener('enter', function (event) {

    event.preventDefault();


    const formData = new FormData(userSignUp);
   
    const user = makeUser(formData);


    saveUser(user);


    window.location = 'map';
});