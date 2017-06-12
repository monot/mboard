Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  get 'messages/sample'
  get 'messages/presentation'

  resources :messages do
    resources :comments
  end


  root 'messages#index'
end
