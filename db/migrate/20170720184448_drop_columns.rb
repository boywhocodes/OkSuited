class DropColumns < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :email, :string
    remove_column :users, :latitude, :float
    remove_column :users, :longitude, :float
    remove_column :users, :culinary_pref, :string
    add_column :users, :eating_speed, :string
    add_column :users, :gender, :string
  end
end
