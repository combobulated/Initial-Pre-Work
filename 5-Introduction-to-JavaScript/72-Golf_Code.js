// 72 Golf Code
// source: learn.freecodecamp.org

/*
In the game of golf each hole has a par meaning the average
number of strokes a golfer is expected to make in order to sink
the ball in a hole to complete the play.
Depending on how far above or below par your strokes are,
there is a different nickname.

-- Assignment --
Your function will be passed par and strokes arguments.
Return the correct string according to this table which
lists the strokes in order of priority; top (highest)
to bottom (lowest):

Strokes	Return

1	"Hole-in-one!"
<= par - 2	"Eagle"

par - 1	"Birdie"

par	"Par"

par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"

par and strokes will always be numeric and positive.
We have added an array of all the names for your convenience.

---- Commits ----
Create the function golfScore(par, strokes)

Uses a chained if else statement to evluate the input paramters
par and strokes. The scores enumerated designation is returned
pending par and stoke count.

--------
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line

if ( strokes == 1){
  return names[0];
} else if ( strokes <= par-2){
  return names[1];
} else if (strokes == par-1 ){
  return names[2];
} else if (strokes == par){
  return names[3];
} else if (strokes == par+1){
  return names[4];
} else if (strokes == par+2){
  return names[5];
}
return names[6];

  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);
