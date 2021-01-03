class QuizFlashcardsController < ApplicationController
  def index 
    @quiz_flashcards = QuizFlashcard.all 
    render json: @quiz_flashcards
  end
end
