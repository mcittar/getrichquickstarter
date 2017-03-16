class Addshortdescritpion < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :short_description, :string
  end
end
