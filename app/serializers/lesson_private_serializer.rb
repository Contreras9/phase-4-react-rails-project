class LessonPrivateSerializer < ActiveModel::Serializer
  attributes :id, :title, :short_description, :task

  has_many :coders
end
