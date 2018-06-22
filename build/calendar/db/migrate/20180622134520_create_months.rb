class CreateMonths < ActiveRecord::Migration[5.1]
  def change
    create_table :months do |t|
      t.string :month, null: false, unique: true
      t.string :events, default: [], array: true
      t.timestamps
    end
  end
end
