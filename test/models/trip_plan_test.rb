# == Schema Information
#
# Table name: trip_plans
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  summary    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class TripPlanTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
