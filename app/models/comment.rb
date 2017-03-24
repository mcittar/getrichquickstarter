class Comment < ApplicationRecord
  validates :author, :project, :body, presence: true

  belongs_to :project

  belongs_to :author,
             class_name: :User,
             foreign_key: :author_id
end
