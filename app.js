export function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
}

export function updateScore(newScore) {
    const user = getUser();
    user.score = newScore;
    saveUser(user);
}

export function getUser() {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
}

export function resetUser() {
    localStorage.removeItem('user');
}

export function saveHighScore(user) {
    let highScores = getHighScores();
    if (!highScores) {
        highScores = [];
    }
    
    highScores.push(user);
    localStorage.setItem('high-scores', JSON.stringify(highScores));
}

export function getHighScores() {
    const json = localStorage.getItem('high-scores');
    if (!json) return null;
    return JSON.parse(json);
}