class Admin::EventsController < Admin::AdminController
  layout 'admin'

  def index
    @events = Event.all
  end

  def new
    @event = Event.new
  end

  def create
    parse_datetimes_from_split_params
    @event = Event.new(event_params)
    @event.listed_by_user = current_user

    if @event.valid?
      @event.save!
      flash[:notice] = "#{@event.name} added."
      redirect_to action: :index
    else
      flash.now[:alert] = "Bad event. #{@event.errors.full_messages.join(', ')}"
      render :new
    end

  end

  def edit
    @event = Event.find(params[:id])
  end

  def update
    @event = Event.find(params[:id])
    parse_datetimes_from_split_params

    if @event.update_attributes(event_params)
      flash[:notice] = "Event updated."
      redirect_to action: :index
    else
      flash.now[:alert] = "Event update failed. #{@event.errors.full_messages.join(', ')}"
      render :edit
    end

  end

  def destroy
    @event = Event.find(params[:id])

    if @event.destroy
      flash[:notice] = "Event deleted!"
    else
      flash[:alert] = "Sorry, error deleting event"
    end

    redirect_to action: :index
  end

  private

  def parse_datetimes_from_split_params
    event_params['start_at'] = parse_datetime( event_params[:start_time] )
    event_params['end_at'] = parse_datetime( event_params[:end_time] )
  end

  def parse_datetime(time)
    Time.strptime(event_params[:date] + time, '%m-%d-%Y%l:%M %p') rescue return
  end

  def event_params
    @params ||= params[:event]
  end

end
