# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.destroy_all

event1 = Event.create({description: 'test', start_date: Time.strptime('06/21/2018 22:00', '%m/%d/%Y %H:%M'), end_date: Time.strptime('06/21/2018 23:00', '%m/%d/%Y %H:%M')})
event2 = Event.create({description: 'test2', start_date: Time.strptime('06/21/2018 3:00', '%m/%d/%Y %H:%M'), end_date: Time.strptime('06/21/2018 5:00', '%m/%d/%Y %H:%M')})