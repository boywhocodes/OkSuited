class CreateChoices < ActiveRecord::Migration[5.0]
  def change
    create_table :choices do |t|
      t.integer :question_id, null: false
      t.text :body, null: false
      t.integer :order, null: false
      
      t.timestamps
    end
  end
end
