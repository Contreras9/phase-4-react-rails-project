class Lesson < ApplicationRecord
    has_many :submissions
    has_many :coders, through: :submissions

    def submission_count
        submissions.count
    end

end
