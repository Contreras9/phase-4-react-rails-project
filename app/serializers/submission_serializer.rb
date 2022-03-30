class SubmissionSerializer < ActiveModel::Serializer
  attributes :id, :coder_id, :lesson_id, :code_solution
end
