class LessonsController < ApplicationController
    skip_before_action :authorized_coder, only: [:index]

    def index
        render json: Lesson.all, status: :ok
    end

    def show
        lesson = Lesson.find(params[:id])
            solved = Submission.where(lesson_id: params[:id], coder_id: loggedIn_coder.id) != []
            if solved
                render json: lesson, serializer: LessonSolvedSerializer, status: :ok
            else
                render json: lesson, serializer: LessonPrivateSerializer, status: :ok
            end
    end

end
