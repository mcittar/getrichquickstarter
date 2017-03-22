class Project < ApplicationRecord
  validates :creator_id, :city, :state, :title, :organization,
            :project_pic, :description, :funding_goal,
            :end_date, presence: true

  belongs_to :user,
             foreign_key: :creator_id

  has_many :rewards

  has_many :taggings

  has_many :tags,
           through: :taggings,
           source: :tag

  has_many :contributions,
           through: :rewards,
           source: :contributions
end
