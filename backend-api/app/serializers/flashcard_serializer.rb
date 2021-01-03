class FlashcardSerializer < ActiveModel::Serializer
  attributes :id, :category, :question, :correct_answer, :incorrect_answers
end
