class PagesController < ApplicationController
def create_tweet
  respond_to do |format|
    format.js
  end
end

def follow
 respond_to do |format|
    format.js
  end
end

def home
@title = "Twitter-Home"
end

def own
@title ="Twitter-Own"
end

def profile
@title ="Twitter-Profile"
end

end
