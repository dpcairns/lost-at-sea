

export function createUser(username, image) {
    localStorage.setItem('user', JSON.stringify({ name: username, image: image }));

}

export function getUser() {
    const json = localStorage.getItem('user');
    if (!json) {
        return null;
    }

    return JSON.parse(json);
}

export function resetUser() {
    localStorage.removeItem('user');
}

export function saveUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

export function addPoints(points) {
    let user = getUser();
    if (user) {
        user.points += points;
        saveUser(user);
    }
}

// for storing user data