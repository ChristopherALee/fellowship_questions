# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.destroy_all

event1 = Event.create({description: 'test', start_date: DateTime.parse('2018-06-21T10:00:00-04:00'), end_date: DateTime.parse('2018-06-21T11:00:00-04:00')})
event2 = Event.create({description: 'test2', start_date: DateTime.parse('2018-06-21T15:00:00-04:00'), end_date: DateTime.parse('2018-06-22T17:00:00-04:00')})
event3 = Event.create({description: 'test3', start_date: DateTime.parse('2018-06-22T10:00:00-04:00'), end_date: DateTime.parse('2018-06-22T13:00:00-04:00')})