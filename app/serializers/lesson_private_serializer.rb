class LessonPrivateSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :short_description, :task
  has_many :coders
end
