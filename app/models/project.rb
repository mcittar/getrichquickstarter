class Project < ApplicationRecord
  validates :creator_id, :city, :state, :title, :organization,
            :video_url, :project_pic, :description, :funding_goal,
            presence: true

  belongs_to :user,
             foreign_key: :creator_id
end
