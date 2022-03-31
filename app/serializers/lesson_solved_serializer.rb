class LessonSolvedSerializer < ActiveModel::Serializer
  attributes :id, :image, :title, :short_description, :task
  has_many :submissions
end
