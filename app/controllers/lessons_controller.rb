class LessonsController < ApplicationController
    skip_before_action :authorized_coder, only: [:index]

    def index
        render json: Lesson.all, status: :ok
    end

    def show
        lesson = Lesson.find(params[:id])
            # solved = lesson.submissions.find_by{|submission| submission.coder.name == session[:name]}
            if true
                render json: lesson, serializer: LessonSolvedSerializer, status: :ok
            else
                render json: lesson, serializer: LessonPrivateSerializer, status: :ok
            end
    end

end
