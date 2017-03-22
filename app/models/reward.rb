class Reward < ApplicationRecord
  validates :project, :amount, :title, :description, presence: true

  belongs_to :project

  has_many :contributions


end
