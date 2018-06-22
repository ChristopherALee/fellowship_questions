@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :description, :start_date, :end_date
    json.month event.start_date.month
    json.day event.start_date.day
    json.start_time event.start_date.strftime('%I:%M:%S %p')
    json.end_time event.end_date.strftime('%I:%M:%S %p')
  end
end
