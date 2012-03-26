class UsersController < ApplicationController
  def login
	@title = "Twitter-Login"
	@user = User.new
  end
  def authenticate
	@title = "Twitter-home"
	redirect_to home_path
        #redirect_to login_path
  end
end
