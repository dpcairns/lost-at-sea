
import { saveUser } from '../data/api.js';

const createUserButton = document.getElementById('createUserButton');
const nameInput = document.getElementById('user-name');

createUserButton.addEventListener('click', () => {
    saveUser({ name: nameInput.value, points: 0 });
    window.location = '../stanzas/stanzas.html';
});


export function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
}

export function getUser() {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
}