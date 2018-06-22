# == Schema Information
#
# Table name: months
#
#  id         :bigint(8)        not null, primary key
#  month      :string           not null
#  events     :string           default([]), is an Array
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Month < ApplicationRecord
  validates :month, presence: true

  has_many :events,
    class_name: 'Event',
    foreign_key: :month_id
end
