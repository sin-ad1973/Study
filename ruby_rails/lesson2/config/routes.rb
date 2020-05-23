Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'people/index'
  get 'people', to: 'people#index'  #/indexを付けなくてもpeopleだけでアクセスできるようにする
  get 'people/add'
  post 'people/add', to: 'people#create'
  get 'people/:id', to: 'people#show'

  get 'msgboard/index'
  post 'msgboard/index'
  get 'msgboard', to: 'msgboard#index'
  post 'msgboard', to: 'msgboard#index'

  get 'hello/index'
  get 'hello', to: 'hello#index'

  get 'hello/other'

  post 'hello', to: 'hello#index'
  post 'hello/index'
end
