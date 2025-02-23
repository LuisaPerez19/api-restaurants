class RestaurantsController < ApplicationController
  before_action :set_restaurant, only: [:show, :edit, :update, :destroy]
  def index
    # category = Category.find_by(name: params[:category])
    # if category
    #   restaurants = category.restaurants.select(:id, :name, :address)
    #   render json: restaurants
    # else
    #   render json: { error: "Category not found" }, status: :not_found
    # end

    @restaurants = Restaurant.all
  end

  def show

  end

  def new
    @restaurant = Restaurant.new
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
    if @restaurant.save
      redirect_to restaurant_path(@restaurant)
    else
      render 'new', status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @restaurant.update(restaurant_params)
      redirect_to restaurant_path(@restaurant)
    else
      render :edit
    end
  end

  def destroy
    if @restaurant.destroy
      redirect_to restaurant_path(@restaurant)
    else
      render :index
    end
  end

  private

  def set_restaurant
    @restaurant = restaurant.find(params[:id])
  end

  def restaurant_params
    params.require(:restaurant).permit(:name, :address, :category_id)
  end
end
