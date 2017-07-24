class Api::ResponsesController < ApplicationController

  def index
    if params["user_id"]
      @responses = Response.includes(:question).where(user_id: params['user_id'])
    else
      @responses = Response.all
    end
    # @responses = Response.includes(:question).where("user_id = ?", params[:user_id])
  end

  def create
    @response = Response.new(response_params)
    @question = @response.question
    @responses  = Response.includes(:question).where("user_id = ?", current_user.id)

    if @response.save
      render :index
    else
      render json: @response.errors, status: 422
    end
  end

  def show

    @response = Response.find(params[:id])

    if @response
      render :show
    else
      render json: []
    end
  end

  def update
  end

def destroy
end

  def response_params
    params.require(:response).permit(:choice_id, :user_id, :importance, :explanation, acceptable_choices: [])
  end

end
