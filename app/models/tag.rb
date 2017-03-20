class Tag < ApplicationRecord
  validates :tag, presence: true

  has_many :taggings

  has_many :projects,
           through: :taggings,
           source: :project
end
