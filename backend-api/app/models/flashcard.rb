class Flashcard < ApplicationRecord
  has_many :quiz_flashcards
  has_many :quizzes, through: :quiz_flashcards
end
