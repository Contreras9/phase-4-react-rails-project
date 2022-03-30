class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized_coder
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  def loggedIn_coder
    Coder.find_by(name:session[:name])
  end

  def authorized_coder
    return render json: { error: "Not Authorized" }, status: :unauthorized unless loggedIn_coder
  end
  
  private

  def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

  def render_not_found(error)
    render json: {error: "#{error.model} not found"}, status: :not_found
  end
end
