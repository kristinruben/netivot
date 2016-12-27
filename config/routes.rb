Rails.application.routes.draw do
  root 'netivot#index'

  resources :netivot, only: [:new, :create, :edit, :update, :destroy]
  resources :network, only: [:new, :create, :edit, :update, :destroy]
  resources :about, only: [:new, :create, :edit, :update, :destroy]
  resources :team, only: [:new, :create, :edit, :update, :destroy]
  resources :join, only: [:new, :create, :edit, :update, :destroy]
  resources :contact, only: [:new, :create, :edit, :update, :destroy]
  resources :resources, only: [:new, :create, :edit, :update, :destroy]
  resources :events
end
