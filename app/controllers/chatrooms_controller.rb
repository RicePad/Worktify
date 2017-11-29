class ChatroomsController < ApplicationController
	before_action :set_chatroom, only: [:show]

	def index
		@chatrooms = Chatroom.all
	end

	def show
	end

	def new
		@chatroom = Chatroom.new
	end
	

	def create
		@chatroom = Chatroom.create(chatroom_params)
	end
	
	private

		def set_chatroom
			@chatroom = Chatroom.find(params[:id])
		end

		def chatroom_params
			params.require(:chatroom).permit(:name)
		end

end
