class TweetsController < ApplicationController
  def index
    @tweet = Tweet.all
  end

  def show
  end

  def new
  end

  def create
    # puts params[:tweet][:title]
    # puts params[:tweet][:content]

    @tweet = Tweet.new
    @tweet.title = params[:tweet][:title]
    @tweet.content = params[:tweet][:content]
    @tweet.save

    redirect_to '/tweets/index'
  end

end
