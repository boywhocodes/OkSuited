# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
user10 = User.create!({
  username: "LaySeaShell",
  password: "123456",
  location: "94701",
  age: 29,
  gender: "male",
  eating_speed: "Slow-eater",
  image_url: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAARLAAAAJDVjN2FhY2RkLTcyYmQtNGQzMC05NTUwLTEwODc0ZDM3M2ZiNg.jpg",
  summary: "I came for the food, I left with a full stomach and a happy soul.",
  five_foods: "Oh, tough question.  Wow, only five? Hmm.  I love cooking vegetarian chicken breasts with a nice olive oil drizzle.  Bananas before every workout always give me a ton of energy.  Indian food when I want to let loose.  Finally, I love a ncie cup of carrot juice, because it's always been an amazing conversation starter.",
  three_faves: "Not a big coffee drinker, so I'd probably say my thermos up in the mountains when I'm skiing is my fave spot for the brew.  As for bars, how could I choose just one?! Migos on 7th is great for the weekends.  Chery'ls has always had a special place in my heart as well.",
  daytime: "I used to be a professional skateboarder, but after one too many broken bones, I decided to fix the bones and go to medical school.",
  hobbies: "Studying and studying is the only hobby that I have time for right now.",
  message_if: "You have 12 minutes for lunch every third Wednesday of the month for a quick sandwich break!"
  })
user1 = User.create!({
  username: "ScottyDoesKnow",
  password: "123456",
  location: "94701",
  age: 29,
  gender: "male",
  eating_speed: "Slow-eater",
  image_url: "https://static.pexels.com/photos/519691/pexels-photo-519691.jpeg",
  summary: "I came for the food, I left with a full stomach and a happy soul.",
  five_foods: "Oh, tough question.  Wow, only five? Hmm.  Vegetarian chicken breast for the protein.  Bananas for energy.  Indian food when I want to let loose.  Carrot juice, because it's always been an amazing conversation starter.",
  three_faves: "Not a big coffee drinker, so I'd probably say my thermos up in the mountains when I'm skiing is my fave spot for the brew.  As for bars, how could I choose just one?! Migos on 7th is great for the weekends.  Chery'ls has always had a special place in my heart as well.",
  daytime: "I used to be a professional skateboarder, but after one too many broken bones, I decided to fix the bones and go to medical school.",
  hobbies: "Studying and studying is the only hobby that I have time for right now.",
  message_if: "You have 12 minutes for lunch every third Wednesday of the month for a quick sandwich break!"
  })
user2 = User.create!({
  username: "scurry23",
  password: "123456",
  location: "94701",
  age: 27,
  gender: "male",
  eating_speed: "Fast Eater",
  image_url: "https://static.pexels.com/photos/433502/pexels-photo-433502.jpeg",
  summary: "I'm looking to meet new people for lunch on days that I have off from work.  Coach has given us more freedom outside of work as the championships keep piling up, so figured I'd use this opportunity to make some new friends!",
  five_foods: "Dinosaur kale is my go to staple food for salads.  I also love cherry icees, dark chocolate milkyways, garbanzo & kidney beans and drinking rain water because it helps me rain threes.",
  three_faves: "Ayesha's coffee that she makes for me every morning will always be my favorite.  I don't drink much, but when I do I absolutely love a fresh bottle of champagne after a winning another Larry O'Brien trophy.  The Foster's Dog has the best soup in SF in my opinion.  If you haven't been, you definitely need to go!",
  daytime: "Rainbow shooter",
  hobbies: "Dribbling, commericals, playing with my kids, hanging with my buddy Kev & playing golf.",
  message_if: "You like to play horse during your lunch breaks."
  })
user3 = User.create!({
  username: "bedheadredhead24",
  password: "123456",
  location: "94701",
  age: 24,
  gender: "female",
  eating_speed: "Averaged Paced Eating",
  image_url: "https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg",
  summary: "Living my life one meal at a time :)",
  five_foods: "Oranges, grapes, acai, oatmeal, strawberries",
  three_faves: "I'm all about Peet's Coffee.  La Cantina is my faorite place to go after work.  Blue Hour has probably the best happy hour in the city.",
  daytime: "Copy writer for A&A Advertising",
  hobbies: "Kayaking, crocheting mittens for my nephews, tequila shots, cooking s'mores in the Shasta mountains.",
  message_if: "You want to try the new taco joint on 4th street!"
  })
user4 = User.create!({
  username: "philthethrill",
  password: "123456",
  location: "53075",
  age: 40,
  gender: "male",
  eating_speed: "Averaged Paced Eater",
  image_url: "https://pennstatermag.files.wordpress.com/2009/11/4fc4c132ce43950ff7a748ee114e6217.jpg",
  summary: "I'm just a normal dad with a knack for being normally-amazing.  My kids are my everything, though sometimes my job as a realtor can make it hard to spend as much time as I desire with them.  Hope to join this site and find other paretns with kids as well.",
  five_foods: "Fruit smoothies in the morning.  Baking burnt chocolatechip cookies with my wife.  Fresh penne pasta with olive oil.  Chocolate-coated figs ",
  three_faves: "Ernesto's has the strongest coffee I have ever had.  Went all the way to Colombia for  a fresh cup of that joe.  Buddie's is my weekend get-a-way for brews and balls with the boys.  The screens are huge, and beer tastes like water.  Nothing more I could ask for.",
  daytime: "I sell houses - but really I sell happiness.",
  hobbies: "Roller skating on rooftops.  School performances.  Spending time at my father in-laws house.",
  message_if: "You think there's no such thing as a free lunch.  I will prove you wrong."
  })
user5 = User.create!({
  username: "lunchlady34",
  password: "123456",
  location: "94701",
  age: 34,
  gender: "female",
  eating_speed: "Fast Eater",
  image_url: "https://static.pexels.com/photos/157023/pexels-photo-157023.jpeg",
  summary: "My life moves at a New York minute.  Figured I might be able to find someone to spend my lunch hour with who also works in the city.",
  five_foods: "Salads, Chicago-style pizza, peanut-butter filled pretzels, buttery-grits, & tofu vegetarian sausage",
  three_faves: "The Great Bean Escape is my one-stop shop for double espressos.  It's the way I start the day, everyday. It's a tie between two: Lorretta's for the margs andHolocast for the red wine.  Although it's not technically a restaurant, Cupcake Cure's double fudge cucpcake is a regular Sunday afternoon treat.",
  daytime: "By night:  I'm a nightowl.  By day:  I'm a functional datasystems engineer specializing in tectonic metacarpel waves.",
  hobbies: "Streamlining computational performances, playing chess, making homemade ice cream, mastering the Brazilian flute.",
  message_if: "You work near Baker street and want to explore new salad joints around the city!"
  })
user1 = User.create!({
  username: "bedheadredhead",
  password: "123456",
  location: "94701",
  age: 24,
  gender: "female",
  eating_speed: "Averaged Paced Eating",
  image_url: "https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg",
  summary: "Living my life one meal at a time :)",
  five_foods: "Oranges, grapes, acai, oatmeal, strawberries",
  three_faves: "I'm all about Peet's Coffee.  La Cantina is my faorite place to go after work.  Blue Hour has probably the best happy hour in the city.",
  daytime: "Copy writer for A&A Advertising",
  hobbies: "Kayaking, crocheting mittens for my nephews, tequila shots, cooking s'mores in the Shasta mountains.",
  message_if: "You want to try the new taco joint on 4th street!"
  })
user6 = User.create!({
  username: "Thatoldguy",
  password: "123456",
  location: "94701",
  age: 64,
  gender: "male",
  eating_speed: "Slow eater",
  image_url: "https://static.pexels.com/photos/160020/pexels-photo-160020.jpeg",
  summary: "Anyone down for a game of bingo?",
  five_foods: "Pudding, marmalade, large bento bowls, schnapps, more pudding.",
  three_faves: "As long as I drink it before 6am, then I prefer McDonald's slow roast.  Otherwise, it'll keep me up the entire night and I won't sleep a wink.  Bars?  Haven't been to one since 1983.  Still, a nice cup o'schnapps at night settles the soul real nice.  McDonald's has special Egg McMuffin sandwiches.  Everyone from my bridge club gets them after our matches.",
  daytime: "Collecting my social security checks, whattup.",
  hobbies: "Watching Judge Judy. Playing Scrabble. Playing bridge. Getting my shoes shined.",
  message_if: "Honestly, I probably won't remember my password next time I log in, so message me now please."
  })
user7 = User.create!({
  username: "MeteorlogistMatt",
  password: "123456",
  location: "94701",
  age: 36,
  gender: "male",
  eating_speed: "Averaged Paced Eater",
  image_url: "https://static.pexels.com/photos/173295/pexels-photo-173295.jpeg",
  summary: "Since I was young I have always lived under the weather.  So one day I started studying the weather.  Now, I talk about the weather and occasionally will make inferences (though that normally leads to unhappy viewers when I'm wrong).",
  five_foods: "Gum drops for candy.  Sourdough for bread.  Sparkling seltzer for beverage.  Grandma's vegetarian meatloaf for entree.  Baked alaska for dessert.",
  three_faves: "Coffee: Triple shot, half venti half-large, 1/4 drip flour, extra sour hot/cold macchiato from Tribbliani's.  Bar: Lillard's Lounge for the perfect Pilsner's.  Restaurant: Pie in the Sky.  Their pizza is literally served in the clouds and carrier pigeoned down to Earth.  If that's not a selling point, I don't know what is.",
  daytime: "Mediocre Meteorologist making minute mistakes, maybe.",
  hobbies: "Looking up.  Skydiving.  Singing in the rain.  Going to weather conventions.",
  message_if: "You are a fellow science buff, or you know the difference between a Cumulonimbus and Nimbostratus."
  })
user8 = User.create!({
  username: "sadfgh",
  password: "123456",
  location: "94701",
  age: 24,
  gender: "female",
  eating_speed: "Averaged Paced Eater",
  image_url: "https://static.pexels.com/photos/486483/pexels-photo-486483.jpeg",
  summary: "Living my life one meal at a time :)",
  five_foods: "Oranges, grapes, acai, oatmeal, strawberries",
  three_faves: "I'm all about Peet's Coffee.  La Cantina is my faorite place to go after work.  Blue Hour has probably the best happy hour in the city.",
  daytime: "Copy writer for A&A Advertising",
  hobbies: "Kayaking, crocheting mittens for my nephews, tequila shots, cooking s'mores in the Shasta mountains.",
  message_if: "You want to try the new taco joint on 4th street!"
  })

  q1 = Question.create(title: "What's your favorite style of cuisine?")
  c1 = Choice.create(question_id: q1.id, body: "Asian", order: 1)
  c2 = Choice.create(question_id: q1.id, body: "European", order: 2)
  c3 = Choice.create(question_id: q1.id, body: "South American", order: 3)
  c4 = Choice.create(question_id: q1.id, body: "Middle Eastern", order: 4)


  q2 = Question.create(title: "What's your favorite style of cuisine?")
  c5 = Choice.create(question_id: q2.id, body: "Asian", order: 1)
  c6 = Choice.create(question_id: q2.id, body: "European", order: 2)
  c7 = Choice.create(question_id: q2.id, body: "South American", order: 3)
  c8 = Choice.create(question_id: q2.id, body: "Middle Eastern", order: 4)


  q3 = Question.create(title: "What's your favorite style of cuisine?")
  c9 = Choice.create(question_id: q3.id, body: "Asian", order: 1)
  c10 = Choice.create(question_id: q3.id, body: "European", order: 2)
  c11 = Choice.create(question_id: q3.id, body: "South American", order: 3)
  c12 = Choice.create(question_id: q3.id, body: "Middle Eastern", order: 4)


  q4 = Question.create(title: "What's your favorite style of cuisine?")
  c13 = Choice.create(question_id: q4.id, body: "Asian", order: 1)
  c14 = Choice.create(question_id: q4.id, body: "European", order: 2)
  c15 = Choice.create(question_id: q4.id, body: "South American", order: 3)
  c16 = Choice.create(question_id: q4.id, body: "Middle Eastern", order: 4)


  q5 = Question.create(title: "What's your favorite style of cuisine?")
  c17 = Choice.create(question_id: q5.id, body: "Asian", order: 1)
  c18 = Choice.create(question_id: q5.id, body: "European", order: 2)
  c19 = Choice.create(question_id: q5.id, body: "South American", order: 3)
  c20 = Choice.create(question_id: q5.id, body: "Middle Eastern", order: 4)


  q6 = Question.create(title: "What's your favorite style of cuisine?")
  c21 = Choice.create(question_id: q6.id, body: "Asian", order: 1)
  c22 = Choice.create(question_id: q6.id, body: "European", order: 2)
  c23 = Choice.create(question_id: q6.id, body: "South American", order: 3)
  c24 = Choice.create(question_id: q6.id, body: "Middle Eastern", order: 4)

# Red Head Responses

  r1 = Response.create(
  choice_id: c1.id,
  user_id: user1.id,
  acceptable_choices: [c1.body, c3.body, c4.body],
  importance: 50,
  explanation: "It's hard to say no to any style of food :)"
  )
