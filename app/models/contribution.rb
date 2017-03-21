class Contribution < ApplicationRecord
  validates :amount, :reward, :backer, presence: true

  belongs_to :reward

  belongs_to :backer,
             foreign_key: :backer_id,
             class_name: :User
end
