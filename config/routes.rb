Rails.application.routes.draw do
  
  resources :lessons, only: [:index, :show]
  resources :coders, only: [:create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post "/login", to: "sessions#login"
  post "/submissions", to: "submissions#create"
  get "/show_profile/:name", to: "coders#show_profile"
  get "/show_dashboard", to: "coders#show_dashboard"
  get "/highscore", to: "coders#highscore"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
