class Message < ApplicationRecord
  belongs_to :user
  has_many :comments

  validates_presence_of :content, :message => "메시지를 입력해주세요."
end
