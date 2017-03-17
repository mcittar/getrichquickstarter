class Reward < ApplicationRecord
  validates :project, :amount, :limit, :title, :description, :delivery_date, presence: true

  belongs_to :project
end
