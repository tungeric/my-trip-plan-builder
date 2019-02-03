@trip_plans.each do |trip_plan|
  json.set! trip_plan.id do
    json.partial! "api/trip_plans/trip_plan", trip_plan: trip_plan
    json.days do
      trip_plan.days.each do |day|
        json.set! day.id do
          json.partial! "api/days/day", day: day
        end
      end
    end
  end
end
