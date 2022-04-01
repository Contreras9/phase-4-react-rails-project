class CoderSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :country, :solved_count
end
