# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Question.destroy_all
Choice.destroy_all
Response.destroy_all

user1 = User.create!({
  username: "Puddingpepper",
  password: "123456",
  location: "94701",
  age: 24,
  gender: "female",
  eating_speed: "Averaged Paced Eater",
  image_url: "https://static.pexels.com/photos/493559/pexels-photo-493559.jpeg",
  summary: "Living my life one meal at a time :)",
  five_foods: "Oranges, grapes, acai, oatmeal, strawberries",
  three_faves: "I'm all about Peet's Coffee.  La Cantina is my faorite place to go after work.  Blue Hour has probably the best happy hour in the city.",
  daytime: "Copy writer for A&A Advertising",
  hobbies: "Kayaking, crocheting mittens for my nephews, tequila shots, cooking s'mores in the Shasta mountains.",
  message_if: "You want to try the new taco joint on 4th street!"
  })


user2 = User.create!({
  username: "Scurry23",
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
  username: "Bedheadredhead24",
  password: "123456",
  location: "94701",
  age: 24,
  gender: "female",
  eating_speed: "Averaged Paced Eater",
  image_url: "https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg",
  summary: "Living my life one meal at a time :)",
  five_foods: "Oranges, grapes, acai, oatmeal, strawberries",
  three_faves: "I'm all about Peet's Coffee.  La Cantina is my faorite place to go after work.  Blue Hour has probably the best happy hour in the city.",
  daytime: "Copy writer for A&A Advertising",
  hobbies: "Kayaking, crocheting mittens for my nephews, tequila shots, cooking s'mores in the Shasta mountains.",
  message_if: "You want to try the new taco joint on 4th street!"
  })
user4 = User.create!({
  username: "Philthethrill",
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
  username: "GreenMilkshakes77",
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
user6 = User.create!({
  username: "CaviarJuggler",
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
  username: "CHeeryTacos",
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

  user9 = User.create!({
    username: "ScottyDoesKnow",
    password: "123456",
    location: "94701",
    age: 29,
    gender: "male",
    eating_speed: "Slow eater",
    image_url: "https://static.pexels.com/photos/519691/pexels-photo-519691.jpeg",
    summary: "I came for the food, I left with a full stomach and a happy soul.",
    five_foods: "Oh, tough question.  Wow, only five? Hmm.  Vegetarian chicken breast for the protein.  Bananas for energy.  Indian food when I want to let loose.  Carrot juice, because it's always been an amazing conversation starter.",
    three_faves: "Not a big coffee drinker, so I'd probably say my thermos up in the mountains when I'm skiing is my fave spot for the brew.  As for bars, how could I choose just one?! Migos on 7th is great for the weekends.  Chery'ls has always had a special place in my heart as well.",
    daytime: "I used to be a professional skateboarder, but after one too many broken bones, I decided to fix the bones and go to medical school.",
    hobbies: "Studying and studying is the only hobby that I have time for right now.",
    message_if: "You have 12 minutes for lunch every third Wednesday of the month for a quick sandwich break!"
    })

  user10 = User.create!({
    username: "LaySeaShell",
    password: "123456",
    location: "94701",
    age: 29,
    gender: "female",
    eating_speed: "Slow eater",
    image_url: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAARLAAAAJDVjN2FhY2RkLTcyYmQtNGQzMC05NTUwLTEwODc0ZDM3M2ZiNg.jpg",
    summary: "I came for the food, I left with a full stomach and a happy soul.",
    five_foods: "Oh, tough question.  Wow, only five? Hmm.  I love cooking vegetarian chicken breasts with a nice olive oil drizzle.  Bananas before every workout always give me a ton of energy.  Indian food when I want to let loose.  Finally, I love a ncie cup of carrot juice, because it's always been an amazing conversation starter.",
    three_faves: "Not a big coffee drinker, so I'd probably say my thermos up in the mountains when I'm skiing is my fave spot for the brew.  As for bars, how could I choose just one?! Migos on 7th is great for the weekends.  Chery'ls has always had a special place in my heart as well.",
    daytime: "I used to be a professional skateboarder, but after one too many broken bones, I decided to fix the bones and go to medical school.",
    hobbies: "Studying and studying is the only hobby that I have time for right now.",
    message_if: "You have 12 minutes for lunch every third Wednesday of the month for a quick sandwich break!"
    })

  q1 = Question.create(title: "What's your favorite style of cuisine?")
  c1 = Choice.create(question_id: q1.id, body: "Asian", order: 1)
  c2 = Choice.create(question_id: q1.id, body: "European", order: 2)
  c3 = Choice.create(question_id: q1.id, body: "South American", order: 3)
  c4 = Choice.create(question_id: q1.id, body: "Middle Eastern", order: 4)


  q2 = Question.create(title: "Typically, how much time do you spend over lunch?")
  c5 = Choice.create(question_id: q2.id, body: "Greater than an hour", order: 1)
  c6 = Choice.create(question_id: q2.id, body: "30-60 minutes", order: 2)
  c7 = Choice.create(question_id: q2.id, body: "Less than a half hour", order: 3)
  c8 = Choice.create(question_id: q2.id, body: "I prefer not to take lunch breaks", order: 4)


  q3 = Question.create(title: "Do you prefer a full meal or a light snack over lunch?")
  c9 = Choice.create(question_id: q3.id, body: "I love a good feast", order: 1)
  c10 = Choice.create(question_id: q3.id, body: "Just something to hold me over", order: 2)
  c11 = Choice.create(question_id: q3.id, body: "I have no preference", order: 3)
  c12 = Choice.create(question_id: q3.id, body: "Whatever size my boss orders", order: 4)


  q4 = Question.create(title: "How many times per week do you go out for lunch?")
  c13 = Choice.create(question_id: q4.id, body: "Everyday!", order: 1)
  c14 = Choice.create(question_id: q4.id, body: "Three to four times per week", order: 2)
  c15 = Choice.create(question_id: q4.id, body: "One to two times per week", order: 3)
  c16 = Choice.create(question_id: q4.id, body: "Zero, there's a reason I have the coolest lunchbox at work", order: 4)


  q5 = Question.create(title: "What's your ideal topic of conversation during lunch")
  c17 = Choice.create(question_id: q5.id, body: "News. Current events are entrhalling to discuss.", order: 1)
  c18 = Choice.create(question_id: q5.id, body: "Sports. Do you believe in miracles?", order: 2)
  c19 = Choice.create(question_id: q5.id, body: "Work. My mind has a hard time diverging during lunch.", order: 3)
  c20 = Choice.create(question_id: q5.id, body: "Lighthearted conversation.", order: 4)


  q6 = Question.create(title: "Do you have any dietary restrictions?")
  c21 = Choice.create(question_id: q6.id, body: "Pescetarian/Vegetarian/Vegan", order: 1)
  c22 = Choice.create(question_id: q6.id, body: "Soy/Gluten/Peanut allergies", order: 2)
  c23 = Choice.create(question_id: q6.id, body: "Religious food preferences", order: 3)
  c24 = Choice.create(question_id: q6.id, body: "None", order: 4)



# User1 Responses

  r1 = Response.create(
  choice_id: c1.id,
  user_id: user1.id,
  acceptable_choices: [c1.body, c3.body, c4.body],
  importance: 50,
  explanation: "It's hard to say no to any style of food :)"
  )
  r2 = Response.create(
  choice_id: c5.id,
  user_id: user1.id,
  acceptable_choices: [c5.body, c6.body],
  importance: 50,
  explanation: ""
  )
  r3 = Response.create(
  choice_id: c9.id,
  user_id: user1.id,
  acceptable_choices: [c9.body, c10.body],
  importance: 50,
  explanation: ""
  )
  r4 = Response.create(
  choice_id: c13.id,
  user_id: user1.id,
  acceptable_choices: [c13.body, c14.body, c15.body],
  importance: 50,
  explanation: "I love a nice and hearty full meal to help get me through the rest of the day."
  )
  r5 = Response.create(
  choice_id: c20.id,
  user_id: user1.id,
  acceptable_choices: [c19.body, c20.body],
  importance: 50,
  explanation: "I tend to normally go with the flow of the conversation."
  )
  r6 = Response.create(
  choice_id: c24.id,
  user_id: user1.id,
  acceptable_choices: [c21.body, c22.body, c23.body, c24.body],
  importance: 50,
  explanation: "I'll eat with anyone regardless of their resstrictions."
  )


  # User2 Responses
  r1 = Response.create(
  choice_id: c2.id,
  user_id: user2.id,
  acceptable_choices: [c2.body],
  importance: 50,
  explanation: "I live and breathe for French food.  Plain and simple."
  )
  r2 = Response.create(
  choice_id: c6.id,
  user_id: user2.id,
  acceptable_choices: [c6.body],
  importance: 50,
  explanation: "Enough time to clear my head and take a breather before the afternon."
  )
  r3 = Response.create(
  choice_id: c12.id,
  user_id: user2.id,
  acceptable_choices: [c10.body, c11.body],
  importance: 50,
  explanation: "A proportionate meal is best."
  )
  r4 = Response.create(
  choice_id: c13.id,
  user_id: user2.id,
  acceptable_choices: [c13.body, c14.body, c15.body],
  importance: 50,
  explanation: ""
  )
  r5 = Response.create(
  choice_id: c20.id,
  user_id: user2.id,
  acceptable_choices: [c19.body, c20.body],
  importance: 50,
  explanation: "What can I say? I'm a suck up."
  )
  r6 = Response.create(
  choice_id: c21.id,
  user_id: user2.id,
  acceptable_choices: [c21.body],
  importance: 50,
  explanation: "I enjoy eating with other vegans."
  )


  # User3 Responses
  r1 = Response.create(
  choice_id: c4.id,
  user_id: user3.id,
  acceptable_choices: [c2.body, c4.body],
  importance: 50,
  explanation: "I will stop everything for a falafel."
  )
  r2 = Response.create(
  choice_id: c7.id,
  user_id: user3.id,
  acceptable_choices: [c7.body],
  importance: 50,
  explanation: "Work keeps my lunches short, but my wallet fat ;)"
  )
  r3 = Response.create(
  choice_id: c10.id,
  user_id: user3.id,
  acceptable_choices: [c10.body],
  importance: 50,
  explanation: ""
  )
  r4 = Response.create(
  choice_id: c15.id,
  user_id: user3.id,
  acceptable_choices: [c14.body, c15.body],
  importance: 50,
  explanation: "I try to get out at least once per week.  Most of the time I just eat at my desk."
  )
  r5 = Response.create(
  choice_id: c17.id,
  user_id: user3.id,
  acceptable_choices: [c17.body],
  importance: 50,
  explanation: "If you follow the news of the world, I'd be open to sitting down over lunch."
  )
  r6 = Response.create(
  choice_id: c22.id,
  user_id: user3.id,
  acceptable_choices: [c21.body, c22.body, c23.body, c24.body],
  importance: 50,
  explanation: "Allergies include nutes and shellfish, but I can be around them without getting sick."
  )


  # User4 Responses
  r1 = Response.create(
  choice_id: c3.id,
  user_id: user4.id,
  acceptable_choices: [c1.body, c3.body],
  importance: 50,
  explanation: "My family comes from Quito, so a large part of my food upbringing was centered around South American fare."
  )
  r2 = Response.create(
  choice_id: c7.id,
  user_id: user4.id,
  acceptable_choices: [c5.body, c6.body],
  importance: 50,
  explanation: "I'd like to start trying to take larger lunch breaks.  That's why I was so thrilled to find this site."
  )
  r3 = Response.create(
  choice_id: c9.id,
  user_id: user4.id,
  acceptable_choices: [c10.body, c12.body],
  importance: 50,
  explanation: ""
  )
  r4 = Response.create(
  choice_id: c16.id,
  user_id: user4.id,
  acceptable_choices: [c13.body, c14.body, c15.body],
  importance: 50,
  explanation: "That number has actually increased since joining OkS.  Now I'm actually excited to take lunch breaks."
  )
  r5 = Response.create(
  choice_id: c18.id,
  user_id: user4.id,
  acceptable_choices: [c18.body],
  importance: 50,
  explanation: "If you're into sports, we will be friends.  Yes, even if you're a Cleveland fan."
  )
  r6 = Response.create(
  choice_id: c22.id,
  user_id: user4.id,
  acceptable_choices: [c22.body, c23.body, c24.body],
  importance: 50,
  explanation: "It's difficult for me to eat soy, but if you're into sports I'll make an exception."
  )


  # User5 Responses
  r1 = Response.create(
  choice_id: c1.id,
  user_id: user5.id,
  acceptable_choices: [c1.body,c4.body],
  importance: 50,
  explanation: "I recently took a trip to Sichuan and haven't stopped eating the food since."
  )
  r2 = Response.create(
  choice_id: c5.id,
  user_id: user5.id,
  acceptable_choices: [c5.body, c6.body],
  importance: 50,
  explanation: "I usually go to the gym and grab a sandwich during lunch."
  )
  r3 = Response.create(
  choice_id: c9.id,
  user_id: user5.id,
  acceptable_choices: [c9.body, c10.body],
  importance: 50,
  explanation: "After a good workout, I definitely need a large meal."
  )
  r4 = Response.create(
  choice_id: c13.id,
  user_id: user5.id,
  acceptable_choices: [c13.body, c14.body, c15.body],
  importance: 50,
  explanation: "Food, food, food."
  )
  r5 = Response.create(
  choice_id: c20.id,
  user_id: user5.id,
  acceptable_choices: [c19.body, c20.body],
  importance: 50,
  explanation: "Workouts make me tired. I'm up for talking about any and all events that interest you."
  )
  r6 = Response.create(
  choice_id: c24.id,
  user_id: user5.id,
  acceptable_choices: [c21.body, c22.body, c23.body, c24.body],
  importance: 50,
  explanation: "Anything works for me!"
  )


  # User6 Responses
  r1 = Response.create(
  choice_id: c4.id,
  user_id: user6.id,
  acceptable_choices: [c4.body],
  importance: 50,
  explanation: "Three words: Zhong. Guo. Fan."
  )
  r2 = Response.create(
  choice_id: c6.id,
  user_id: user6.id,
  acceptable_choices: [c6.body],
  importance: 50,
  explanation: ""
  )
  r3 = Response.create(
  choice_id: c11.id,
  user_id: user6.id,
  acceptable_choices: [c11.body],
  importance: 50,
  explanation: "I can't say I have ever thought about how much I eat."
  )
  r4 = Response.create(
  choice_id: c14.id,
  user_id: user6.id,
  acceptable_choices: [c14.body],
  importance: 50,
  explanation: "There are so many Chinese restaurants and so little time."
  )
  r5 = Response.create(
  choice_id: c19.id,
  user_id: user6.id,
  acceptable_choices: [c19.body],
  importance: 50,
  explanation: "If you work at my company, let's grab lunch!"
  )
  r6 = Response.create(
  choice_id: c23.id,
  user_id: user6.id,
  acceptable_choices: [c21.body, c22.body, c23.body, c24.body],
  importance: 50,
  explanation: ""
  )


  # User7 Responses
  r1 = Response.create(
  choice_id: c1.id,
  user_id: user7.id,
  acceptable_choices: [c1.body, c3.body, c4.body],
  importance: 50,
  explanation: ""
  )
  r2 = Response.create(
  choice_id: c5.id,
  user_id: user7.id,
  acceptable_choices: [c5.body, c6.body],
  importance: 50,
  explanation: "Lunch time is the best time."
  )
  r3 = Response.create(
  choice_id: c9.id,
  user_id: user7.id,
  acceptable_choices: [c9.body, c10.body],
  importance: 50,
  explanation: ""
  )
  r4 = Response.create(
  choice_id: c13.id,
  user_id: user7.id,
  acceptable_choices: [c13.body, c14.body, c15.body],
  importance: 50,
  explanation: "I forget about breakfast, so lunch is when I make up for it."
  )
  r5 = Response.create(
  choice_id: c20.id,
  user_id: user7.id,
  acceptable_choices: [c19.body, c20.body],
  importance: 50,
  explanation: "The job is tough enough as it is, I typically like being able to kick back for a few minutes with colleagues."
  )
  r6 = Response.create(
  choice_id: c24.id,
  user_id: user7.id,
  acceptable_choices: [c21.body, c22.body, c23.body, c24.body],
  importance: 50,
  explanation: "It's the 21st century, c'mon."
  )


  # User8 Responses
  r1 = Response.create(
  choice_id: c3.id,
  user_id: user8.id,
  acceptable_choices: [c1.body, c3.body, c4.body],
  importance: 50,
  explanation: ""
  )
  r2 = Response.create(
  choice_id: c8.id,
  user_id: user8.id,
  acceptable_choices: [c5.body, c6.body],
  importance: 50,
  explanation: "Our company has a mandatory lunch hour, so although I prefer not to take a lunch break, hopefully this app can help me meet new people.  That way I will guilt myself into not wanting to stand them up, which will force myself to go out."
  )
  r3 = Response.create(
  choice_id: c9.id,
  user_id: user8.id,
  acceptable_choices: [c9.body, c10.body],
  importance: 50,
  explanation: ""
  )
  r4 = Response.create(
  choice_id: c13.id,
  user_id: user8.id,
  acceptable_choices: [c13.body, c14.body, c15.body],
  importance: 50,
  explanation: "I love a nice and hearty full meal to help get me through the rest of the day."
  )
  r5 = Response.create(
  choice_id: c20.id,
  user_id: user8.id,
  acceptable_choices: [c19.body, c20.body],
  importance: 50,
  explanation: "I tend to normally go with the flow of the conversation."
  )
  r6 = Response.create(
  choice_id: c23.id,
  user_id: user8.id,
  acceptable_choices: [c23.body],
  importance: 50,
  explanation: "I folow a buddhist-kosher-native-american-paleo diet."
  )


  # User9 Responses
  r1 = Response.create(
  choice_id: c2.id,
  user_id: user9.id,
  acceptable_choices: [c1.body, c2.body],
  importance: 50,
  explanation: "Fish from the isles of Norway. Goat milk from the Cilean hills. Colombian coffee.  That's what I live for."
  )
  r2 = Response.create(
  choice_id: c7.id,
  user_id: user9.id,
  acceptable_choices: [c7.body],
  importance: 50,
  explanation: "I eat McDonald's everyday.  It's fast.  Food quality is superb as well as long as you keep it vegetarian."
  )
  r3 = Response.create(
  choice_id: c12.id,
  user_id: user9.id,
  acceptable_choices: [c12.body],
  importance: 50,
  explanation: "Truth be told. I only eat McD's becausemy boss goes there everyday.  If you can relate, we should have lunch together."
  )
  r4 = Response.create(
  choice_id: c13.id,
  user_id: user9.id,
  acceptable_choices: [c13.body],
  importance: 50,
  explanation: "Golden arches five days a week.  Yes, I can already feel the cholestrol building up."
  )
  r5 = Response.create(
  choice_id: c18.id,
  user_id: user9.id,
  acceptable_choices: [c18.body, c20.body],
  importance: 50,
  explanation: "I like talking about the big game...or the small game...or really any size game."
  )
  r6 = Response.create(
  choice_id: c24.id,
  user_id: user9.id,
  acceptable_choices: [c21.body, c24.body],
  importance: 50,
  explanation: "Looking to try more vegan food!  Hit me up if you know of any hole in the walls worth checking out."
  )



  # User10 Responses

  r1 = Response.create(
  choice_id: c1.id,
  user_id: user10.id,
  acceptable_choices: [c1.body, c3.body, c4.body],
  importance: 50,
  explanation: ""
  )
  r2 = Response.create(
  choice_id: c5.id,
  user_id: user10.id,
  acceptable_choices: [c5.body, c6.body],
  importance: 50,
  explanation: ""
  )
  r3 = Response.create(
  choice_id: c9.id,
  user_id: user10.id,
  acceptable_choices: [c9.body, c10.body],
  importance: 50,
  explanation: ""
  )
  r4 = Response.create(
  choice_id: c13.id,
  user_id: user10.id,
  acceptable_choices: [c13.body, c14.body, c15.body],
  importance: 50,
  explanation: ""
  )
  r5 = Response.create(
  choice_id: c20.id,
  user_id: user10.id,
  acceptable_choices: [c19.body, c20.body],
  importance: 50,
  explanation: ""
  )
  r6 = Response.create(
  choice_id: c24.id,
  user_id: user10.id,
  acceptable_choices: [c21.body, c22.body, c23.body, c24.body],
  importance: 50,
  explanation: ""
  )
