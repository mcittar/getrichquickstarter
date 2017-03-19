class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates_presence_of :name, :message => 'Invalid username'
  validates :email, :name, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :projects

  attr_reader :password

  before_validation :ensure_token

  def self.generate_token
    SecureRandom.urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_token!
    self.session_token = User.generate_token
    self.save!
    self.session_token
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user &&
      BCrypt::Password.new(user.password_digest).is_password?(password)
  end

  def ensure_token
    self.session_token ||= User.generate_token
  end

end
