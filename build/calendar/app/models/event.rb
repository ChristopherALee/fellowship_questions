# == Schema Information
#
# Table name: events
#
#  id          :bigint(8)        not null, primary key
#  description :string           not null
#  start_date  :datetime         not null
#  end_date    :datetime         not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ApplicationRecord
  validates :description, :start_date, :end_date, presence: true
end
