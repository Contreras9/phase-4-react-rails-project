class Lesson < ApplicationRecord
    has_many :submissions
    has_many :coders, through: :submissions
end
