class QuizzesController < ApplicationController
before_action :set_flashcards
  def index 
    @quizzes = Quiz.all 
    render json: @quizzes
  end

  def create(category)
    quiz = Quiz.new(quiz_params)
    if quiz.save! 
      # flashcards.map do |flashcard|
      #   QuizFlashcard.create(quiz_id: quiz.id, flashcard_id: flashcard.id )
      # end
      select_category(category)
      @flashcards.map do |flashcard|
        QuizFlashcard.create(quiz_id: quiz.id, flashcard_id: flashcard.id)
      end
      render json: quiz
    else 
      render json: {error: "Something went wrong during creation"}
    end
  end

  private 
  
  def quiz_params
    params.require(:quiz).permit(:player, :high_score)
  end

  def set_flashcards 
    @flashcards = Flashcard.all
  end

  def select_category(selection)
    @flashcards = Flashcard.select { |flashcard| flashcard.category === selection}
  end
end
