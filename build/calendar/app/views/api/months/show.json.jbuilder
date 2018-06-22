json.extract! @month, :id, :month
json.events @month.events.map { |month| month.id }