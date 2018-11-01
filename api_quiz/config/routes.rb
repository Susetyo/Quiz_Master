Rails.application.routes.draw do
  devise_for :users,
             controllers: {
               sessions: 'sessions',
               registrations: 'registrations'
						}
	
  scope :api do
    namespace :v1, module: 'api/v1' do 
      resources :questions    
      post 'check_answer' => 'questions#check_answer'
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
