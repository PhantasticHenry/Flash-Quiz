class FlashcardsController < ApplicationController
  before_action :set_flashcard
  
  def index 
    @flashcards = Flashcard.all 
    render json: @flashcards
  end

  def create 
    flashcard = Flashcard.new(flashcard_params)
    if flashcard.save! 
      render json: flashcard
    else 
      render json: {error: "Something went wrong during creation"}
    end
  end

  def edit 
    @flashcard
  end

  def update 
    if @flashcard.update(flashcard_params)
      render json: @flashcard
    else 
      render json: {error: "Something went wrong during update"}
    end
  end

  def destroy 
    if @flashcard.destroy
      render json: @flashcards
    else 
      render json: {error: "Something went wrong could not delete flashcard"}
    end
  end

  
  private
  
  def flashcard_params
    params.require(:flashcard).permit(:category, :question, :correct_answer, incorrect_answers: [])
  end

  def set_flashcard 
    @flashcard = Flashcard.find_by(id: params[:id])
  end
end
