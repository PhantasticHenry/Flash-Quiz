class CreateQuizzes < ActiveRecord::Migration[6.0]
  def change
    create_table :quizzes do |t|
      t.string :player, default: "Player"
      t.integer :high_score, default: 0

      t.timestamps
    end
  end
end
