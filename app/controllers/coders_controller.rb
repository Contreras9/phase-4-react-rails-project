class CodersController < ApplicationController
    skip_before_action :authorized_coder, only: [:highscore, :create, :show_profile]

    def highscore
        render json: Coder.all, status: :ok
    end

    def show_dashboard
        unsolved = Lesson.where {|lesson| lesson.submissions.where(coder_id: loggedIn_coder.id) == []} 
        render json: unsolved, each_serializer: LessonPublicSerializer,  status: :ok  
      
    end

    def show_profile
        puts params[:name]
        coder = Coder.find_by(name:params[:name])
        if coder
            render json: coder, status: :ok
        else
            render_not_found
        end
    end


    def create
        coder = Coder.create!(coder_params)
        session[:name] = coder.name
        render json: coder, status: :created
    end


    private

    def coder_params
        params.permit(:name, :age, :country, :password)
    end
end
