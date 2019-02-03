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

class TripPlan < ApplicationRecord
  has_many :days
end
