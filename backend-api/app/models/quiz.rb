class Quiz < ApplicationRecord
  has_many :quiz_flashcards
  has_many :flashcards, through: :quiz_flashcards
end
