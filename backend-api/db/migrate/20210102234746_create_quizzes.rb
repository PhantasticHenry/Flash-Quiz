class CreateQuizzes < ActiveRecord::Migration[6.0]
  def change
    create_table :quizzes do |t|
      t.string :player
      t.integer :high_score

      t.timestamps
    end
  end
end
