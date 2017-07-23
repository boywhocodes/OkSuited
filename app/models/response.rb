class Response < ApplicationRecord

  belongs_to :choice

  belongs_to :user

  has_one :question,
  through: :choice,
  source: :question

end
