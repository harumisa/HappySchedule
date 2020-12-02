class RenameTateColumnToSchedules < ActiveRecord::Migration[6.0]
  def change
    rename_column :schedules, :tate, :date
  end
end
