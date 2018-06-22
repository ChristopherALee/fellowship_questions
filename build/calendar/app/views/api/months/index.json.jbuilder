@months.each do |month|
  json.set! month.month do
    json.extract! month, :id, :month
    json.events month.events.map { |month| month.id }
  end
end