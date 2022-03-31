class LessonPublicSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :short_description, :submission_count
  has_many :coders
end