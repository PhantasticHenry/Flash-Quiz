class Flashcard < ApplicationRecord
  has_many :quiz_flashcards
  has_many :quizzes, through: :quiz_flashcards
  validates :category, :question, :correct_answer, :incorrect_answers, presence: true
  validates :question, uniqueness: true
end
