# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Month.destroy_all
Event.destroy_all

month1 = Month.create({month: "January", events: []})
month2 = Month.create({month: "February", events: []})
month3 = Month.create({month: "March", events: []})
month4 = Month.create({month: "April", events: []})
month5 = Month.create({month: "May", events: []})
month6 = Month.create({month: "June", events: []})
month7 = Month.create({month: "July", events: []})
month8 = Month.create({month: "August", events: []})
month9 = Month.create({month: "September", events: []})
month10 = Month.create({month: "October", events: []})
month11 = Month.create({month: "November", events: []})
month12 = Month.create({month: "December", events: []})

event1 = Event.create({description: 'test', start_date: DateTime.parse('2018-06-21T10:00:00-04:00'), end_date: DateTime.parse('2018-06-21T11:00:00-04:00'), month_id: month6.id})
event2 = Event.create({description: 'test2', start_date: DateTime.parse('2018-06-21T15:00:00-04:00'), end_date: DateTime.parse('2018-06-22T17:00:00-04:00'), month_id: month6.id})
event3 = Event.create({description: 'test3', start_date: DateTime.parse('2018-06-22T10:00:00-04:00'), end_date: DateTime.parse('2018-06-22T13:00:00-04:00'), month_id: month6.id})
event3 = Event.create({description: 'test88', start_date: DateTime.parse('2018-05-10T08:00:00-04:00'), end_date: DateTime.parse('2018-06-22T15:00:00-04:00'), month_id: month6.id})
event4 = Event.create({description: 'test89', start_date: DateTime.parse('2018-01-10T08:00:00-04:00'), end_date: DateTime.parse('2018-01-10T09:00:00-04:00'), month_id: month1.id})