Rails.application.routes.draw do
  devise_for :users
  root 'schedules#index'
  resources :users, only: [:edit, :update]
  resources :schedules, only: [:new, :create, :destroy, :edit, :update] do
    collection do
      get 'search'
    end
  end
end
