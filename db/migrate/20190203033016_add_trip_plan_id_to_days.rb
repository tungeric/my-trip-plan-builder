class AddTripPlanIdToDays < ActiveRecord::Migration[5.2]
  def change
    add_column :days, :trip_plan_id, :integer
  end
end
