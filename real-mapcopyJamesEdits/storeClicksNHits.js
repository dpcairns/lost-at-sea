export function saveUserClicks(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
}

export function getUserclicks() {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
}