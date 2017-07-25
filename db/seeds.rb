# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create!({
  username: "876",
  password: "123456",
  location: "12345",
  age: 24,
  gender: "male",
  eating_speed: "Averaged Paced Eating",
  summary: "This is a test summary"
  
  })

  q1 = Question.create(title: "What's your favorite style of cuisine?")

  c1 = Choice.create(question_id: q1.id, body: "Asian", order: 1)


  c2 = Choice.create(question_id: q1.id, body: "European", order: 2)


  c3 = Choice.create(question_id: q1.id, body: "South American", order: 3)


  c4 = Choice.create(question_id: q1.id, body: "Middle Eastern", order: 4)

  r1 = Response.create(
  choice_id: c1.id,
  user_id: user1.id,
  acceptable_choices: [c1.body, c3.body, c4.body],
  importance: 50,
  explanation: "Test explanation"
  )
