class AddTables < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.datetime :start_at_time
      t.datetime :end_at_time
      t.datetime :start_at_date
      t.datetime :end_at_date
      t.string :location_display_string
      t.text :description
      t.string :registration_link
      t.timestamps
    end

    create_table :cities do |t|
      t.string :name
      t.timestamps
    end

    create_table :locations do |t|
      t.string :name
      t.integer :city_id
      t.integer :capacity
      t.timestamps
    end
  end
end
