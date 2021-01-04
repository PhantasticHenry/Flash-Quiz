class AddCategoryToQuiz < ActiveRecord::Migration[6.0]
  def change
    add_column :quizzes, :category, :string
  end
end
