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

event1 = Event.create({description: 'Do the laundry', start_date: DateTime.parse('2018-06-21T10:00:00-04:00'), end_date: DateTime.parse('2018-06-21T11:00:00'), month_id: month6.id})
event2 = Event.create({description: 'Take out the trash', start_date: DateTime.parse('2018-06-21T15:00:00'), end_date: DateTime.parse('2018-06-22T17:00:00'), month_id: month6.id})
event3 = Event.create({description: 'Beach', start_date: DateTime.parse('2018-06-22T10:00:00'), end_date: DateTime.parse('2018-06-22T13:00:00'), month_id: month6.id})
event3 = Event.create({description: 'Breakfast', start_date: DateTime.parse('2018-05-10T08:00:00'), end_date: DateTime.parse('2018-06-22T15:00:00'), month_id: month6.id})
event4 = Event.create({description: 'Go to school', start_date: DateTime.parse('2018-01-10T08:00:00'), end_date: DateTime.parse('2018-01-10T09:00:00'), month_id: month1.id})
event5 = Event.create({description: 'Christmas', start_date: DateTime.parse('2018-12-25T00:00:00'), end_date: DateTime.parse('2018-12-25T23:30:00'), month_id: month12.id})

event6 = Event.create({description: 'One', start_date: DateTime.parse('2018-06-26T00:00:00'), end_date: DateTime.parse('2018-06-26T00:30:00'), month_id: month6.id})
event7 = Event.create({description: 'Two', start_date: DateTime.parse('2018-06-26T01:00:00'), end_date: DateTime.parse('2018-06-26T01:30:00'), month_id: month6.id})
event8 = Event.create({description: 'Three', start_date: DateTime.parse('2018-06-26T02:00:00'), end_date: DateTime.parse('2018-06-26T02:30:00'), month_id: month6.id})
event9 = Event.create({description: 'Four', start_date: DateTime.parse('2018-06-26T03:00:00'), end_date: DateTime.parse('2018-06-26T03:30:00'), month_id: month6.id})
event10 = Event.create({description: 'Five', start_date: DateTime.parse('2018-06-26T04:00:00'), end_date: DateTime.parse('2018-06-26T04:30:00'), month_id: month6.id})
event11 = Event.create({description: 'Six', start_date: DateTime.parse('2018-06-26T05:00:00'), end_date: DateTime.parse('2018-06-26T05:30:00'), month_id: month6.id})
event12 = Event.create({description: 'Seven', start_date: DateTime.parse('2018-06-26T06:00:00'), end_date: DateTime.parse('2018-06-26T06:30:00'), month_id: month6.id})

event13 = Event.create({description: 'One', start_date: DateTime.parse('2018-06-27T12:00:00'), end_date: DateTime.parse('2018-06-26T13:30:00'), month_id: month6.id})
event14 = Event.create({description: 'Two', start_date: DateTime.parse('2018-06-27T15:00:00'), end_date: DateTime.parse('2018-06-26T15:30:00'), month_id: month6.id})
event15 = Event.create({description: 'Three', start_date: DateTime.parse('2018-06-27T17:00:00'), end_date: DateTime.parse('2018-06-26T18:00:00'), month_id: month6.id})