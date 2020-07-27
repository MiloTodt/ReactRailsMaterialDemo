class ItemsController < ApplicationController
    # before_action :authenticate_user!
    def index 
        items = Item.all 
        render json: items, status: :ok 
    end
end
