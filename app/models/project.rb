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

  has_many :backers,
           through: :contributions,
           source: :backer

  def self.search(word)
    search = word.split("-").join(" ")
    tags = Tag.where(tag: search)
    if !tags[0].nil?
      Tag.where(tag: search)[0].projects
    end
    titles = self.where("lower(title) LIKE ?", "%#{search.downcase}%")
    tags + titles
  end

end
