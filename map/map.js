// VIEW OBJECT ////
const view = {
    displayMessage: function(msg) {
        const messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        const cell = document.getElementById(location);
        cell.setAtrribute("class", "hit");
        // this will be converted from to number form before the user guess gets this far - so we can find an individual td id
    },
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
        // these will assign either of the two images based on if a user hits a ship or misses a ship.
    }
}; 

