class QuizFlashcardSerializer < ActiveModel::Serializer
  attributes :id
  has_one :quiz
  has_one :flashcard
end
