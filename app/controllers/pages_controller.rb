class PagesController < ApplicationController

def create_tweet
  if signed_in?
        @tweet = current_user.tweets.create(params[:tweet]);
  	respond_to do |format|
   	 format.js
 	end
  else
  	redirect_to login_path
  end
end

def follow
  if signed_in?
    respond_to do |format|
       format.js
    end
  else
	redirect_to login_path
  end
end

def home
	if signed_in?
		@title = "Twitter-Home"
		@tweet = Tweet.new
	else
		redirect_to login_path
	end
end

def own
	if signed_in?
		@title ="Twitter-Own"
	else
		redirect_to login_path
	end
end

def edit
	if signed_in?
		@title ="Twitter-Profile"
	else
		redirect_to login_path
	end
end

def show
	if signed_in?
		@title ="Twitter-Profile"
	else
		redirect_to login_path
	end
end

end
