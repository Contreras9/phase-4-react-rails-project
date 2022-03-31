class SessionsController < ApplicationController
    skip_before_action :authorized_coder, only: [:login]
    
    def login
    
        coder = Coder.find_by(name:params[:name])
        if coder&.authenticate(params[:password])
            session[:name] = coder.name
            render json: coder, status: :ok
        else
            render json: {error: "Invalid Password or name"}, status: :unauthorized
        end
    end

    def authorized
        render json: loggedIn_coder
    end

    def destroy
        session.delete :name
    end

end
