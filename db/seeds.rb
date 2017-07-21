# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create!({
  username: "54321",
  password: "123456",
  location: "12345",
  age: 24,
  gender: "male",
  eating_speed: "Averaged Paced Eating"
  })
