class TestController < ApplicationController
    def home
        render json: {status: "The app works"}
    end
end