const readline = require('readline');
const profile = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? (Nicknames acceptable) ', (answer1) => {
  rl.question('What\'s an activity your like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourtie? ', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            rl.question('What is your superpower? ', (answer7) => {
                profile.name = answer1;
                console.log(`Name: ${answer1}`);
                profile.activity = answer2;
                console.log(`Activity: ${answer2}`);
                profile.music = answer3;
                console.log(`Music: ${answer3}`);
                profile.meal = answer4;
                console.log(`Meal: ${answer4}`);
                profile.food = answer5;
                console.log(`Food: ${answer5}`);
                profile.sport = answer6;
                console.log(`Sport: ${answer6}`);
                profile.superpower = answer7;
                console.log(`Superpower: ${answer7}`);
                
                console.log(`${profile.name} loves listening to ${profile.music} while ${profile.activity}, devouring ${profile.food} for ${profile.meal}, prefers ${profile.sport} over any other sport, and is amazing at ${profile.superpower}.`);
                
                rl.close();
            });
          });
        });
      });
    });
  });
});





