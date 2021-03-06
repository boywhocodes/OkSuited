class Api::UsersController < ApplicationController

	def index

		if params[:query_params]
				age = search_params[:age] || 0
			gender = search_params[:gender] || ""



			@users = User.where("age >= #{age}")
									 .where("gender ILIKE '#{gender}'")
								 	 .where.not(id: current_user.id)

		else
			@users = User.where.not(id: current_user.id)
		end
	end

	def create
		@user = User.new(user_params)

		if @user.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

	def show
		@user = User.find(params[:id])

		if @user
			render :profile
		else
			render json: @user.errors, status: 422
		end
	end

	def update
		@user  = User.find(params[:id])

		if @user.update_attributes(user_params)
			render :profile
		else
			render json: @user.errors, status: 422
		end
	end



	private

	def user_params
		params.require(:user).permit(:username, :summary, :password, :eating_speed, :gender, :age, :location, :five_foods, :three_faves, :daytime, :hobbies, :friday, :message_if, :image_file_name, :image_url)
	end

	def search_params
		params.require(:query_params).permit(:age, :gender)
	end
end
