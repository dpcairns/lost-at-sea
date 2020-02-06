import { getUser, saveHighScore, getHighScores } from '../app.js';

const nameField = document.getElementById('username');
const avatarField = document.getElementById('avatar');
const clickField = document.getElementById('clicks');
const accuracyField = document.getElementById('accuracy');
const highScoresField = document.getElementById('high-scores');

// this is where the getUser function is for displaying results
const user = getUser();

// We save the high score for the current user here
saveHighScore(user);

// Display results
nameField.innerText = user.username;
avatarField.src = user.avatar;
clickField.innerText = user.clicks;

// This calculates the accuracy if we want to use it!! :))

if (user.clicks > 0) {
    accuracyField.innerText = (user.hits / user.clicks * 100) + '%';
}

Use this to test high scores
localStorage.removeItem('high-scores');
saveHighScore({ username: '1', hits: 10, clicks: 20 });
saveHighScore({ username: '2', hits: 12, clicks: 15 });

// Display high scores
// Current problem is the high scores aren't being sorted by accuracy
// Sort highScores to show the highest scores to be on the top of the list
const highScores = getHighScores();
highScores.sort((a, b) => {return a.clicks - b.clicks;});
highScores.forEach(item => {
    if (!item || item.clicks === 0) return;
    // Uncomment this line to only show the first maxHighScores (5) - change this number if you want
    // to display that number of high scores -- I only have it uncommented because since it isn't sorting 
    // properly it isn't showing the top scores by rank, so ugh :P Halp.
    // if (currentHighScores > maxHighScores) return;

    const li = document.createElement('li');
    const nameScore = document.createElement('span');
    nameScore.className = 'name';
    nameScore.innerText = item.username;
    li.appendChild(nameScore);
    
    const clickScore = document.createElement('span');
    clickScore.className = 'clicks';
    clickScore.innerText = item.clicks;
    li.appendChild(clickScore);
    
    const accuracyScore = document.createElement('span');
    accuracyScore.className = 'accuracy';
    accuracyScore.innerText = `${item.hits / item.clicks * 100}%`;
    li.appendChild(accuracyScore);
    
    highScoresField.appendChild(li);
});