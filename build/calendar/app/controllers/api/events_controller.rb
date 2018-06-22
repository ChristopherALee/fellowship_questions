class Api::EventsController < ApplicationController
  def index
    @events = Event.all
  end

  def show
    @event = Event.find_by_id(params[:id])
  end

  def create
    @event = Event.new(event_params)

    if @event.save
      render 'api/events/show'
    else
      render json: @event.errors.messages, status: 422
    end
  end

  def update
    @event = Event.find_by_id(params[:id])

    if @event.update
      render 'api/events/show'
    else
      render json: ['Cannot edit event'], status: 403
    end
  end

  def destroy
    @event = Event.find_by_id(params[:id])

    if @event
      @event.destroy
      render 'api/events/show'
    else
      render json: ['Cannot delete event'], status: 403
    end
  end

  def monthEvents
    @events = Event.all.select do |event|
      event.month.id == params[:monthId].to_i
    end

    render '/api/events/index'
  end

  private
  def event_params
    params.require(:event).permit(:description, :start_date, :end_date)
  end
end