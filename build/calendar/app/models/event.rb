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
#  month_id    :integer          not null
#

class Event < ApplicationRecord
  validates :description, :start_date, :end_date, presence: true

  belongs_to :month,
    class_name: 'Month',
    foreign_key: :month_id
end
