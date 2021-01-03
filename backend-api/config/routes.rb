Rails.application.routes.draw do
  resources :quiz_flashcards
  resources :flashcards
  resources :quizzes
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
