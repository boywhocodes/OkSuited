class AddColumnsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :five_foods, :text
    add_column :users, :three_faves, :text
    add_column :users, :daytime, :text
    add_column :users, :hobbies, :text
    add_column :users, :friday, :text
    add_column :users, :message_if, :text
  end
end
