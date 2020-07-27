# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Item.create( name: "Shoe One", price: 12.99)
Item.create( name: "Shoe Two", price: 55.99)
Item.create( name: "Shoe Three", price: 120.99)
Item.create( name: "Shoe Four", price: 4.99)

User.create!(
    email: 'test@test.com',
    password: 'Testpass'
  )
  # curl -X POST -v -H 'Content-Type: application/json'   http://localhost:5000/login -d   '{"user" : {"email": "test@test.com", "password": "Testpass" }}'