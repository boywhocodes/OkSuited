class CreateResponses < ActiveRecord::Migration[5.0]
  def change
    create_table :responses do |t|
      t.integer :choice_id, null: false
      t.integer :user_id, null: false
      t.string :acceptable_choices, default: [], null: false, array: true
      t.integer :importance
      t.text :explanation
      t.timestamps
    end
  end
end
