@events.each do |event|
  json.set! event.id do
    json.extract! event, :id, :description, :start_date, :end_date
  end
end
