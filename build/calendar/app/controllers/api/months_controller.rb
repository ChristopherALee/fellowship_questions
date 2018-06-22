class Api::MonthsController < ApplicationController
  def index
    @months = Month.all
  end

  def show
    @month = Month.find_by_id(params[:id])
  end

  def create
    @month = Month.new(month_params)

    if @month.save
      render 'api/month/show'
    end
  end

  def month_params
    params.require(:month).permit(:month)
  end
end