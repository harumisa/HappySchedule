class AddIndexToSchedules < ActiveRecord::Migration[6.0]
  def change
    add_index :schedules, [:title, :memo], length: 60
  end
end
