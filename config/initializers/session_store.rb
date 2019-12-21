if Rails.env == "production"
    Rails.application.config.session_store :cookie_store, key: "_store_app", domain: "store-app-react-rails.herokuapp.com"
else
    Rails.application.config.session_store :cookie_store, key: "_store_app"
end