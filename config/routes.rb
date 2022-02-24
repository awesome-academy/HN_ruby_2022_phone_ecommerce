Rails.application.routes.draw do
  scope "(:locale)", locale: /en|vi/ do
    devise_for :users
    root "static_pages#home"
    get "static_pages/home"
    get "/cart", to: "static_pages#cart"
    post "/cart", to: "static_pages#cart"
    get "/checkout", to: "static_pages#checkout"
    get "/shop", to: "static_pages#shop"
    as :user do
      get "/login", to: "devise/sessions#new"
      post "/login", to: "devise/sessions#create"
      delete "/logout", to: "devise/sessions#destroy"
      get "/signup", to: "devise/registrations#new"
    end
    put "/carts/minus-qty-cart", to: "carts#minus", as: :minus_qty_cart
    put "/carts/plus-qty-cart", to: "carts#plus", as: :plus_qty_cart
    delete "/carts", to: "carts#destroy", as: :delete_cart
    resources :account_activations, only: :edit
    resources :password_resets, except: %i(index show destroy)
    resources :carts, only: :create
    resources :products, only: %i(index show)
    resources :comments, only: %i(create destroy)
    resources :orders, only: %i(new create)
    resources :rates, only: %i(create destroy)
    namespace :admin do
      get "static_pages/home"
      root "static_pages#home"
      resources :products
    end
  end
end
