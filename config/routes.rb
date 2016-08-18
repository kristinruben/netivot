Rails.application.routes.draw do
  root 'netivot#index'

  resources :netivot, only: [:new, :create, :edit, :update, :destroy] do
    resources :network, only: [:new, :create, :edit, :update, :destroy]
  end
end
