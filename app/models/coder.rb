class Coder < ApplicationRecord
    has_secure_password

    has_many :submissions
    has_many :lessons, through: :submissions
    validates :name, presence: true, uniqueness: true



  def lessons_solved
    lessons
  end

  def lessons_unsolved
     lessons
  end

  def solved_count
    lessons_solved.count
  end

end
