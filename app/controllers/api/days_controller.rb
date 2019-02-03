class Api::DaysController < ApplicationController

  def create
    @day = Day.create(day_params)
    if @day.save!
      render "api/days/show"
    else
      render @day.errors.full_messages, status: 422
    end
  end

  def index
    if params[:trip_plan_id]
      trip_plan = TripPlan.find_by(id: params[:trip_plan_id].to_i)
      @days = trip_plan.days
    else 
      @days = Day.all
    end
    render "api/days/index"
  end

  def show
    @day = Day.find(params[:id])
    if @day
      render "api/days/show"
    else 
      render json: ["Could not find day"], status: 404
    end
  end

  def destroy
    @day = Day.find(params[:id])
    if @day
      Day.destroy(@day.id)
    else
      render json: ["Can't delete what doesn't exist"], status: 404
    end
  end

  def update
    @day = Day.find(params[:id])
    if @day.update(day_params)
      render "api/days/show"
    else
      render json: @day.errors.full_messages, status: 401
    end
  end

  def day_params
    params.require(:day).permit(:id, :trip_plan_id, :title, :description)
  end
end
