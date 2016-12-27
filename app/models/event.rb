class Event < ActiveRecord::Base

  belongs_to :location

  has_many :attendees, dependent: :destroy

  attr_accessor :name, :start_at_time, :end_at_time, :start_at_date, :end_at_date,
    :location_display_string, :description

  attr_reader :registration_link

end
