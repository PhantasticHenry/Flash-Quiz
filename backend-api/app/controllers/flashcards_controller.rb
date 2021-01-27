class FlashcardsController < ApplicationController
  before_action :set_flashcard
  
  def index 
    @flashcards = Flashcard.all 
    render json: @flashcards
  end

  def create 
    flashcard = Flashcard.new(flashcard_params)
    a = flashcard.incorrect_answers.select { |ia| !ia.empty? }
    if a.length == 3 && flashcard.save!
      render json: flashcard
    else
      render json: {error: "Something went wrong during creation"}
    end
  end

  def show
    flashcard = Flashcard.find_by(id: params[:id])
    if flashcard
      render json: flashcard
    else 
      render json: {error: "An error occured during find"}
    end
  end

  def edit 
    @flashcard
  end

  def update
    flashcard = Flashcard.find_by(id: params[:flashcard][:id])
    if flashcard.update(flashcard_params)
      render json: flashcard
    else 
      render json: {error: "Something went wrong during update"}
    end
  end

  def destroy
    if @flashcard.destroy
      flashcards = Flashcard.all
      render json: flashcards
    else 
      render json: {error: "Something went wrong could not delete flashcard"}
    end
  end

  
  private
  
  def flashcard_params
    params.require(:flashcard).permit(:id, :category, :question, :correct_answer, incorrect_answers: [])
  end

  def set_flashcard 
    @flashcard = Flashcard.find_by(id: params[:id])
  end
end
