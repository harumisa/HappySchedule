class CreateSchedules < ActiveRecord::Migration[6.0]
  def change
    create_table :schedules do |t|
      t.string :title, null: false
      t.datetime :tate, null: false
      t.string :category, null: false
      t.text :memo
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
