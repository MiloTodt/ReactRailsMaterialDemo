Rails.application.routes.draw do
  resources :items
  devise_for :users,
               path: '',
               path_names: {
                 sign_in: 'login',
                 sign_out: 'logout',
                 registration: 'signup'
               },
               controllers: {
                 sessions: 'sessions',
                 registrations: 'registration'
               }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
