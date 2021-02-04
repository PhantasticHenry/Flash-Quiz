class QuizzesController < ApplicationController
  before_action :set_quiz

  def index
    @quizzes = Quiz.all
    render json: @quizzes
  end

  def create
    quiz = Quiz.new(quiz_params)
    if quiz.save! 
      flashcards = Flashcard.select { |flashcard| flashcard.category === quiz.category }
      flashcards.map do |flashcard|
        QuizFlashcard.create(quiz_id: quiz.id, flashcard_id: flashcard.id)
      end
      render json: {quiz: quiz, quiz_flashcards: quiz.quiz_flashcards }
    else 
      render json: {error: "Something went wrong during creation"}
    end
  end

  def show 
    @quiz_flashcards = QuizFlashcard.select { |qfc| qfc.quiz.id === @quiz.id}
    render json: {quiz: @quiz, quiz_flashcards: @quiz_flashcards}
  end
  
  def update 
    @quiz.update!(quiz_params) ? (render json: @quiz) : (render json: {error: "Something went wrong during update."})
  end

  private 
  
  def quiz_params
    params.require(:quiz).permit(:player, :high_score, :category)
  end

  def set_quiz 
    @quiz = Quiz.find_by(id: params[:id])
  end
end
