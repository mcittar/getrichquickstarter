class Reward < ApplicationRecord
  validates :project, :amount, :title, :description, :delivery_date, presence: true

  belongs_to :project
end
