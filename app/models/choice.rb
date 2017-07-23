class Choice < ApplicationRecord

  validates :question_id, :body, :order, presence: true

  belongs_to :question

  has_many :responses 

end
