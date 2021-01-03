class CreateQuizFlashcards < ActiveRecord::Migration[6.0]
  def change
    create_table :quiz_flashcards do |t|
      t.belongs_to :quiz, null: false, foreign_key: true
      t.belongs_to :flashcard, null: false, foreign_key: true

      t.timestamps
    end
  end
end
