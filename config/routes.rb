Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update, :index]
    resource :session, only: [:create, :destroy]
    resources :questions, only: [:index, :create, :destroy]
    resources :responses, only: [:create,  :show, :index, :update, :destroy]
  end

end


# took out gender and eating speed params in controller file.  Need to look into user_index.js file and see what to remove in order to not display both those prarams and fix search to only search by age
