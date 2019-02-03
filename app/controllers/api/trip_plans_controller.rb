class Api::TripPlansController < ApplicationController
  
  def create
    @trip_plan = TripPlan.create(trip_plan_params)
    if @trip_plan.save!
      render "api/trip_plans/show"
    else
      render @trip_plan.errors.full_messages, status: 422
    end
  end

  def index
    @trip_plans = TripPlan.all
    render "api/trip_plans/index"
  end

  def show
    @trip_plan = TripPlan.find(params[:id])
    if @trip_plan
      render "api/trip_plans/show"
    else
      render json: ["Could not find trip plan"], status: 404
    end
  end

  def destroy
    @trip_plan = TripPlan.find(params[:id])
    if @trip_plan
      TripPlan.destroy(@trip_plan.id)
    else
      render json: ["Can't delete what doesn't exist"], status: 404
    end
  end

  def update
    @trip_plan = TripPlan.find(params[:id])
    puts params
    if @trip_plan.update(trip_plan_params)
      render "api/trip_plans/show"
    else
      render json: @trip_plan.errors.full_messages, status: 401
    end
  end

  def trip_plan_params
    params.require(:trip_plan).permit(:id, :title, :summary)
  end
end
