//premade grid 7x7


[00][01][02][03][04][05][06]
[10][11][12][13][14][15][16]
[20][21][22][23][24][25][26]
[30][31][32][33][34][35][36]
[40][41][42][43][44][45][46]
[50][51][52][53][54][55][56]
[60][61][62][63][64][65][66]


You can use objects to keep everything neatly organized. You can also create a mtheod to place the ship on the field inside that object. There is way more you can do to improve your code, but take this as a start

// direction: true = hor, false = vert - nicer solutions than "magic numbers" are possible
function Ship (size, direction) { 
    this.coveredFields = [];
    this.place         = function (sizeY, sizeX) { // sizeX & sizeY: size of fields in both dimensions

        // pick randomly within our limits
        var locationX;
        var locationY;
        if (direction) {
            locationX = Math.floor(Math.random() * (sizeX - 1 - size));
            locationY = Math.floor(Math.random() * (sizeY - 1));
        } else {
            locationX = Math.floor(Math.random() * (sizeX - 1));
            locationY = Math.floor(Math.random() * (sizeY - 1 - size));
        }

        // TODO: check that we don't cross/overlap other ships
        // ...

        // setting locations
        for (var i = 0 ; i < size ; i++) {
            if (direction) {
                this.coveredFields.push(locationY * 10 + locationX + i)
            } else {
                this.coveredFields.push((locationY + i) * 10 + locationX)
            }
        }
    }
}
You can then create your 3-field long horizontal ship using var ship1 = new Ship(3,false); place it un your field using ship1.place(7,7); and access the fields that are covered using ship1.coveredFields (which is an array that contains all fields)

If this is too complex for you, just use an array for each chip's locations (var ship1 = [location1, location2, ... ]) - but OOP is most likely the nicest way to do this.

Another recommendation: describe your field by a two-dimensional array (that is, an array that contains arrays). then, store your ships inside that array, instead of the coordinates inside your ships. This also makes placing without overlapping easier, and checking for hit or miss.

If you don't want to do that because it's above your current skill level, you should consider to store at least each dimension separately instead of generating one number out of both. You can use either arrays with two elements each for each point (first value being, x, second y), or objects that look like this: {x : 5, y : 3}




// //////////////////////////////////////////////////////////////
function battleship() 
{
var guess; //Stores user's guess
var userchoices = []; //records user's guess until ship is sunk or user chickens out
var issunk = false; //status of ship
var hits = 0; //number of hits
var guesses = 0; //number of guesses
var randomloc = Math.floor(Math.random() * 5); //Random Number Generator
var location1 = randomloc; 
var location2 = location1 + 1;
var location3 = location2 + 1;

while(issunk == false)
{
    guess = prompt("Ready,Aim,Fire! (Enter a number 0-6):");
    console.log("users input = " + guess);

    if(guess == null) // If users presses 'OK' without entering anything or the 'Cancel' this would break the loop.
        break;

    if (guess < 0 || guess > 6){
        alert("Please enter a valid cell number. No of guesses has been incremented.");
guesses++; //Gotta punish the player.
    }
    else if (userchoices.includes(guess) == false) /*instead of doing what i did yo u 
can change this line to "else if (userchoices.includes(guess)) and then put the 
following oprations in its else clause. */
    {
        guesses++;
        userchoices[guesses] = guess;
        console.log("User choices = " + userchoices);

        if (guess == location1 || guess == location2 || guess == location3)
        {
            alert("Enemy Battleship HIT");
            hits = hits + 1;
            if (hits == 3)
            {
                issunk = true;
                alert("Enemy battleship sunk");
            }
        }
            else
            {
                alert("You Missed");
            }
    }
         else
        {
            alert("you have already fired at this location.")
        }
    if (issunk) //writing issunk == true is overkill
    {
        var stats = "you took " + guesses + " guesses to sink the battleship. You 
accuracy was " + (3/guesses);
        alert(stats);
    }
}
if(guess == null && issunk == false)
console.log("You failed");  //Humiliate the user for chickening out.
userchoices = []; //Empties the array so user can start over again without relaoding the page
issunk = false; //sets issunk to false for a new game
var randomloc = Math.floor(Math.random() * 5); //creates new random numbers for ship coordinates
}