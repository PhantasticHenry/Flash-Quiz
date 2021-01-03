class QuizFlashcard < ApplicationRecord
  belongs_to :quiz
  belongs_to :flashcard
end
