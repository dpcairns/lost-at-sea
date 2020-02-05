import { getUser } from '../app.js';

const nameField = document.getElementById('username');
const avatarField = document.getElementById('avatar');
const user = getUser();

nameField.innerText = user.username;
avatarField.src = user.avatar;