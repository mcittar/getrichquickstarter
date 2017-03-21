class CreateContributions < ActiveRecord::Migration[5.0]
  def change
    create_table :contributions do |t|
      t.integer :amount, null: false
      t.integer :reward_id, null: false
      t.integer :backer_id, null: false

      t.timestamps
    end
    add_index :contributions, :reward_id
    add_index :contributions, :backer_id
  end
end
