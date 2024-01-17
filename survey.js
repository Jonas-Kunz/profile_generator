const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// objects for answer 2:
const questions = {
  0: "What is your name? ",
  1: "What's an activity you like doing?",
  2: "What do you listen to while doing that?",
  3: "What meal is your favourite (eg: dinner)",
  4: "What is your favourite thing to eat for that meal?",
  5: "What sport is your absolute favourite?",
  6: "What is your superpower?",
};
const ansObj = { 0: "", 1: "", 2: "", 3: "", 4: "", 5: "", 6: "" };

//// funky I made by myself really gross and icky
const profileGeneratorOg = function () {
  let name = "";
  let activity = "";
  let listen = "";
  let meal = "";
  let food = "";
  let sport = "";
  let power = "";
  let tick = false;

  rl.question("What is your name? ", (answer1) => {
    name += answer1;
    rl.question("What's an activity you like doing?", (answer2) => {
      activity += answer2;
      rl.question("What do you listen to while doing that?", (answer3) => {
        listen += answer3;
        rl.question("What meal is your favourite (eg: dinner)", (answer4) => {
          meal += answer4;
          rl.question(
            "What is your favourite thing to eat for that meal?",
            (answer5) => {
              food += answer5;
              rl.question(
                "What sport is your absolute favourite?",
                (answer6) => {
                  sport += answer6;
                  rl.question("What is your superpower?", (answer7) => {
                    power += answer7;
                    tick += true;
                    if (tick) {
                      console.log(
                        `${name} loves listening to ${listen} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${power}`
                      );
                    }
                    rl.close();
                  });
                }
              );
            }
          );
        });
      });
    });
  });
};

profileGeneratorOg();

//// funky
// I made this with after being shown an example by Yashsvi Girdhar
// it uses recursive function calls to achieve the same result as above.
let j = 0;

const profileGenerator = function () {
  // if the counter is less than 7 execute:
  if (j < 7) {
    //opens question line with the question in
    // questions[j] and passes the answer to the call back
    rl.question(questions[j], (answer) => {
      // the callback sets the value at key j in ansObj to what was input by user
      ansObj[j] = answer;
      j++;
      // calls the function again
      profileGenerator();
    });
  }
  /// when j is incremented to 7 execute
  if (j === 7) {
    //closes readline interface
    rl.close();
    // logs all answers
    console.log(`
    ${ansObj[0]} loves listening to ${ansObj[2]} while ${ansObj[1]},
    devouring ${ansObj[3]} for ${ansObj[4]}, prefers ${ansObj[5]} over any other sport, 
    and is amazing at${ansObj[6]}
   `);
  }
};

profileGenerator();

