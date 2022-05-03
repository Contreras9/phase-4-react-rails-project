class LessonPrivateSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :short_description, :task, :test_case_file
  has_many :coders
end
