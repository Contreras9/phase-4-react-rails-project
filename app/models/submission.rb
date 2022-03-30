class Submission < ApplicationRecord
    belongs_to :coder
    belongs_to :lesson
end
