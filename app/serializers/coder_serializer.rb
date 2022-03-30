class CoderSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :country
  has_many :lessons
end
