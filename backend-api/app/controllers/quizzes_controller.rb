class QuizzesController < ApplicationController

  def index 
    @quizzes = Quiz.all 
    render json: @quizzes
  end

  def create 
    quiz = Quiz.new(quiz_params)
    if quiz.save! 
      render json: quiz
    else 
      render json: {error: "Something went wrong during creation"}
    end
  end

  private 
  
  def quiz_params
    params.require(:quiz).permit(:player, :high_score)
  end
end
