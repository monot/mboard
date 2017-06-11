class Comment < ApplicationRecord
  belongs_to :message
  belongs_to :user

  validates_presence_of :content, :message => "답글을 입력해주세요."
end
