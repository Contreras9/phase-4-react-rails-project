class LessonSerializer < ActiveModel::Serializer
  attributes :id, :test_case_file, :title, :short_description, :task
end
