class LessonPrivateSerializer < ActiveModel::Serializer
  attributes :id, :test_case_file, :title, :short_description, :task

  has_many :coders
end
