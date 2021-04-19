Rails.application.routes.draw do
  root to: 'portfolios#index'
  resources :portfolios, only: [:show]
end
