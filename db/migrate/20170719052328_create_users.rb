class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :email, null: false
      t.string :location, null: false
      t.integer :age, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :culinary_pref, null: false
      t.text :summary
      t.integer :prof_pic_id
      t.string :image_file_name
      t.string :image_content_size
      t.string :image_file_size
      t.datetime :image_updated_at
      t.string :image_url
    end
  end
end
