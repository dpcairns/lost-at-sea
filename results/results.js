import { getUser } from '../app.js';

const nameField = document.getElementById('username');
const avatarField = document.getElementById('avatar');
const user = getUser();

console.log(user);

nameField.innerText = user.username;
avatarField.src = '../assets/' + user.avatar;