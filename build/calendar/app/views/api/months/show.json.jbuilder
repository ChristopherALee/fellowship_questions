json.extract! @month, :month
json.events @month.events.map { |month| month.id }