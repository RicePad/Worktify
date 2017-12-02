class ChatroomUser < ApplicationRecord
  belongs_to :user
  belongs_to :chatroom
  has_many :purchases
end
