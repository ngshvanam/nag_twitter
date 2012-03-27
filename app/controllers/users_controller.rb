class UsersController < ApplicationController

	def login
	@title = "Twitter-Login"	
		if signed_in?
			redirect_to home_path	
		else	
			@user = User.new
		end
	end
  
  	def authenticate
				
		@title = "Twitter-home"
		user = User.authenticate(params[:user][:email], params[:user][:password])
		if user.nil?
			redirect_to login_path
		else
			sign_in(user,params[:user][:remember])
			redirect_to home_path
		end
  	end
  
  	def signup
  		user=User.new(params[:user]);
  		if user.save
  			sign_in(user,"")
  			redirect_to home_path
  		else 
  			# The Following defination needs to be changed
  	   	redirect_to login_path
  		end
  	end
  
 	def signout
		sign_out
		redirect_to login_path
	end
  
end
