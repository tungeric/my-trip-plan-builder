# == Schema Information
#
# Table name: days
#
#  id           :bigint(8)        not null, primary key
#  title        :string           not null
#  description  :text             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  trip_plan_id :integer
#

class Day < ApplicationRecord
  belongs_to :trip_plan
end
