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

require 'test_helper'

class MonthTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
