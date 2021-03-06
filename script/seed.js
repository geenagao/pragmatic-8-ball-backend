/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../db');
const models = require('../db/models');

const EightBall = db.models.eightBall;
const Question = db.models.question;
const Response = db.models.response;
const LiveResponse = db.models.liveResponse;
const LiveQuestion = db.models.liveQuestion;

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

  const eightBalls = await Promise.all([
    EightBall.create({
      name: 'Will I'
    }),
    EightBall.create({
      name: 'Should I'
    }),
    EightBall.create({
      name: 'Where should I'
    }),
    EightBall.create({
      name: 'Who will'
    }),
    EightBall.create({
      name: 'Classic 8 Ball Mode'
    }),
    EightBall.create({
      name: 'Live Mode'
    })
  ]);

  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`successfully seeded ${eightBalls.length} eightBalls`);

  //create Seed for Trip
  const responses = await Promise.all([
    Response.create({
      content: 'You can do anything you put your mind to!',
      eightBallId: 1
    }),
    Response.create({
      content: 'Stop asking questions and start taking action!',
      eightBallId: 1
    }),
    Response.create({
      content: 'You miss 100% of the shots you don\'t take.',
      eightBallId: 1
    }),
    Response.create({
      content: 'Don\'t let your dreams be dreams. Yesterday you said tomorrow, so just do it.',
      eightBallId: 1
    }),
    Response.create({
      content: 'Consider making a pros and cons list and weighing the resulting points to help you make a decision.',
      eightBallId: 2
    }),
    Response.create({
      content: 'Will this benefit you in the long run? Make sure you\'re not just considering short term gains.',
      eightBallId: 2
    }),
    Response.create({
      content: 'If you\'re exhausted, sleep on it and make a decision in the morning when you\'re fresh.',
      eightBallId: 2
    }),
    Response.create({
      content: 'Have you thought of any good alternatives? There are almost always other options.',
      eightBallId: 2
    }),
    Response.create({
      content: 'Westfield, NJ. It\'s a great place to raise a family.',
      eightBallId: 3
    }),
    Response.create({
      content: 'San Francisco, CA. There\'s a lot of opportunity in the tech industry there.',
      eightBallId: 3
    }),
    Response.create({
      content: 'Seattle, WA. The surrounding nature is really beautiful.',
      eightBallId: 3
    }),
    Response.create({
      content: 'New York, NY. It\'s one of the most dynamic cities in the world.',
      eightBallId: 3
    }),
    Response.create({
      content: 'Nicholas Milazzo',
      eightBallId: 4
    }),
    Response.create({
          content: 'Jeff Gore',
          eightBallId: 4
        }),
    Response.create({
          content: 'Peter Coyle',
          eightBallId: 4
        }),
    Response.create({
          content: 'Chung Lin',
          eightBallId: 4
        }),
    Response.create({
          content: 'Mario Villacreses',
          eightBallId: 4
        }),
    Response.create({
          content: 'Jingjing Li',
          eightBallId: 4
        }),
    Response.create({
          content: 'Yoni Slotwiner',
          eightBallId: 4
        }),
    Response.create({
          content: 'Donald Leistman',
          eightBallId: 4
        }),
    Response.create({
          content: 'Da Woon Lee',
          eightBallId: 4
        }),
    Response.create({
          content: 'Geena Gao',
          eightBallId: 4
        }),
    Response.create({
          content: 'Anurag Prasad',
          eightBallId: 4
        }),
    Response.create({
          content: 'Valerie Pilossof',
          eightBallId: 4
        }),
    Response.create({
          content: 'Ben Ellentuck',
          eightBallId: 4
        }),
    Response.create({
          content: 'Marshall Zobel',
          eightBallId: 4
        }),
    Response.create({
          content: 'Connor Jessup',
          eightBallId: 4
        }),
    Response.create({
          content: 'Andrew Wong',
          eightBallId: 4
        }),
    Response.create({
          content: 'Oleksii Borysonok',
          eightBallId: 4
        }),
    Response.create({
          content: 'Jang Won Ko',
          eightBallId: 4
        }),
    Response.create({
          content: 'Thomas Lux',
          eightBallId: 4
        }),
    Response.create({
          content: 'Ian Dewsbury',
          eightBallId: 4
        }),
    Response.create({
          content: 'Alexander Sobiloff',
          eightBallId: 4
        }),
    Response.create({
          content: 'Philip Ka Sing Leung',
          eightBallId: 4
        }),
    Response.create({
          content: 'Fred Ma',
          eightBallId: 4
        }),
    Response.create({
          content: 'Jeton Lolovic',
          eightBallId: 4
        }),
    Response.create({
          content: 'Frances Wang',
          eightBallId: 4
        }),
    Response.create({
          content: 'Stephen Loder',
          eightBallId: 4
        }),
    Response.create({
          content: 'Ruta Kruliauskiate',
          eightBallId: 4
        }),
    Response.create({
          content: 'Jared Jackson',
          eightBallId: 4
        }),
    Response.create({
          content: 'Joshua Park',
          eightBallId: 4
        }),
    Response.create({
          content: 'Edison Alulema',
          eightBallId: 4
        }),
    Response.create({
          content: 'Casey Chan',
          eightBallId: 4
    }),
    Response.create({
      content: 'It is certain',
      eightBallId: 5
    }),
    Response.create({
      content: 'It is decidedly so',
      eightBallId: 5
    }),
    Response.create({
      content: 'Without a doubt',
      eightBallId: 5
    }),
    Response.create({
      content: 'Yes definitely',
      eightBallId: 5
    }),
    Response.create({
      content: 'You may rely on it',
      eightBallId: 5
    }),
    Response.create({
      content: 'As I see it, yes',
      eightBallId: 5
    }),
    Response.create({
      content: 'Most likely',
      eightBallId: 5
    }),
    Response.create({
      content: 'Outlook good',
      eightBallId: 5
    }),
    Response.create({
      content: 'Yes',
      eightBallId: 5
    }),
    Response.create({
      content: 'Signs point to yes',
      eightBallId: 5
    }),
    Response.create({
      content: 'Reply hazy try again',
      eightBallId: 5
    }),
    Response.create({
      content: 'Ask again later',
      eightBallId: 5
    }),
    Response.create({
      content: 'Better not tell you now',
      eightBallId: 5
    }),
    Response.create({
      content: 'Cannot predict now',
      eightBallId: 5
    }),
    Response.create({
      content: 'Concentrate and ask again',
      eightBallId: 5
    }),
    Response.create({
      content: 'Don\'t count on it',
      eightBallId: 5
    }),
    Response.create({
      content: 'My reply is no',
      eightBallId: 5
    }),
    Response.create({
      content: 'My sources say no',
      eightBallId: 5
    }),
    Response.create({
      content: 'Outlook not so good',
      eightBallId: 5
    }),
    Response.create({
      content: 'Very doubtful',
      eightBallId: 5
})
  ]);

  console.log(`successfully seeded ${responses.length} responses`);

  const liveQuestions = await Promise.all([
    LiveQuestion.create({
      input: 'What\'s in a name?',
      id: 51,
      responseContent: null,
      eightBallId: 6
    }),
    LiveQuestion.create({
      input: 'What should I eat for lunch today?',
      id: 52,
      responseContent: null,
      eightBallId: 6
    })
  ]);

  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`successfully seeded ${liveQuestions.length} questions`);

  const liveResponses = await Promise.all([
    LiveResponse.create({
      content: 'A rose by any other name would smell as sweet.',
      liveQuestionId: 51
    }),
    LiveResponse.create({
      content: 'A nickname can be an indicator of personality traits.',
      liveQuestionId: 51
    }),
    LiveResponse.create({
      content: 'There\'s a great Halal food cart on the south side of Beaver between Marketfield and Broadway - food is delicious and only $5.',
      liveQuestionId: 52
    }),
    LiveResponse.create({
      content: 'Thai food obvi.',
      liveQuestionId: 52
    }),
    LiveResponse.create({
      content: 'Steak tartare, caviar, and champagne.',
      liveQuestionId: 52
    })
  ]);
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`successfully seeded ${liveResponses.length} live responses`);

}



// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message);
    console.error(err.stack);
    process.exitCode = 1;
  })
  .then(() => {
    console.log('closing db connection');
    db.close();
    console.log('db connection closed');
  });

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...');
