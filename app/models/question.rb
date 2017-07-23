class Question < ApplicationRecord

  validates: :title, presence: true

  has_many :choices

  has_many :responses,
  through: :choices,
  source: :responses

end
