import { saveUser } from './app.js';

const userSignUp = document.getElementById('userCreate');

userSignUp.addEventListener('click', () => {
    const nameField = document.getElementById('username');
    const avatarField = document.querySelector('input[name="avatar"]:checked').value;

    saveUser({ username: nameField.value, avatar: avatarField });
    window.location = 'map'; 
});