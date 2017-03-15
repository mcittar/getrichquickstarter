class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.integer :creator_id, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :title, null: false
      t.string :organization, null: false
      t.string :video_url, null: false
      t.string :project_pic, null: false
      t.text :description, null: false
      t.integer :funding_goal, null: false

      t.timestamps
    end
    add_index :projects, :creator_id
  end
end
