class AddMonthIdToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :month_id, :integer, null: false
  end
end
