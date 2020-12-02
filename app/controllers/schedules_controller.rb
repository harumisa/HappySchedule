class SchedulesController < ApplicationController

  def index
    @schedules = current_user.schedules.order('date ASC')
  end

  def new
    @schedule = Schedule.new
  end

  def create
    if Schedule.create(schedule_params)
      redirect_to root_path
    else
      render :new
    end
  end

  def destroy
    schedule = Schedule.find(params[:id])
    if schedule.destroy
      redirect_to root_path
    end
  end

  def edit
    @schedule = Schedule.find(params[:id])
  end

  def update
    schedule = Schedule.find(params[:id])
    if schedule.update(schedule_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def search
    @schedules = Schedule.search(params[:keyword], current_user.id)
    respond_to do |format|
      format.html
      format.json
    end
  end

  private

  def schedule_params
    params.require(:schedule).permit(:date, :title, :category, :memo).merge(user_id: current_user.id)
  end

end
