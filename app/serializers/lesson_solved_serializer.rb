class LessonSolvedSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :short_description, :task, :test_case_file
  has_many :submissions
end
