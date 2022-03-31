class SubmissionsController < ApplicationController

    
   def create
      
         submission = Submission.create!(submission_params)
         render json: submission, status: :created
      
   end

   def submission_params
      params.permit(:lesson_id,:code_solution).merge(coder_id: loggedIn_coder.id)

   end

end

# .merge(coder_id: loggedIn_coder.id)